# uuid(要確定沒有重複)隨機生產圖片id->存回product_img
# 加入sql到uuid
from flask import Flask, render_template, request, redirect, url_for, Blueprint, jsonify, current_app, make_response
from module.configs import configure_collection
import time
import json
import os
import uuid
from module.data_utils import database_utils
app = Blueprint('product_manage', __name__)


@app.route("/upload_picture", methods=["POST"])
def upload_picture():
    if 'file' not in request.files:
        return jsonify({
            'status': "failed",
            'cause': 603
        })
    file = request.files['file']
    if file.filename == '':
        return jsonify({
            'status': "failed",
            'cause': 604
        })

    extension = file.filename.split(".")[1]
    check = False
    if(extension == "jpg" or extension == "png" or extension == "jpeg"):
        check = True
    # 副檔名不對
    if not check:
        return jsonify({
            'status': "failed",
            'cause': 605
        })
    ##看圖檔是否已經存在
    filename = str(uuid.uuid4()) + "." + extension
    print(filename)
    while(os.path.exists((current_app.config["config"]["UploadFolder"] + "/" + filename))):
        filename = str(uuid.uuid4()) + "." + extension

    file.save(os.path.join(current_app.config["config"]["UploadFolder"], filename))
    db = database_utils(current_app.config['config'])
    db.command_excute("""
                    INSERT INTO picture (file_path) 
                    VALUES (%(file_path)s);
                    """, {"file_path": (current_app.config["config"]["UploadFolder"] + "/" + filename)})
    db.commit_change()
    dbreturn = db.command_excute("""
                SELECT 
                    id
                FROM 
                    picture 
                WHERE 
                    file_path = (%(file_path)s)
                """, {"file_path": (current_app.config["config"]["UploadFolder"] + "/" + filename)})
    return jsonify({
        'id': dbreturn[0]['id'],
        'status': "success",
        'cause': 666
    })
@app.route("/upload_product", methods = ["POST"])
def upload_product():
    db = database_utils(current_app.config['config'])
    dbreturn = db.command_excute("""
        SELECT
            *
        FROM
            product
        WHERE
            shop_id = %(shop_id)s AND name = %(name)s
        """, request.json
    )
    # 已有這個商品
    if len(dbreturn) != 0:
        return jsonify({
            'status': "failed",
            'cause': 601
        })
    # 有條件未填
    require_field = ["shop_id", "name", "price", "number", "intro", "category", "picture_id", "status"]
    for need in require_field:
        if need not in request.json.keys():
            return jsonify({"status": "failed", "cause": 602})
    # 成功
    db.command_excute("""
                INSERT INTO product (shop_id, name, price, number, intro, category, picture_id, avgstar, status)
                VALUES (%(shop_id)s, %(name)s, %(price)s, %(number)s, %(intro)s, %(category)s, %(picture_id)s , '0', %(status)s)
                """, request.json)
    db.commit_change()
    return jsonify({
        'status': 'success',
        'cause': 699
    })
@app.route("/modify_product", methods = ["POST"])
def modify_product():
    # 不能更改shop_id
    if "shop_id" in request.json.keys():
        return jsonify({"status": "failed", "cause": 701})

    db = database_utils(current_app.config['config'])
    dbreturn = db.command_excute("""
            SELECT
                *
            FROM
                product
            WHERE
                id = %(id)s
            """, request.json)
    # 須找到商品
    if len(dbreturn) != 1:
        return jsonify({
            'status': "failed",
            'cause': 702
        })
    #
    info = request.json
    require_field = ["name", "price", "number", "intro", "category", "picture_id", "status"]
    for modify in require_field:
        if modify not in request.json.keys():
            info[modify] = dbreturn[0].get(modify)

    db.command_excute("""
                     UPDATE product
                     SET name = %(name)s, price = %(price)s, number = %(number)s, intro = %(intro)s, category = %(category)s, picture_id = %(picture_id)s, status = %(status)s
                     WHERE id = %(id)s
                    """, info)
    return jsonify({
        'status': 'success',
        'cause': 700
    })
@app.route("/delete_product", methods = ["POST"])
def delete_product():
    db = database_utils(current_app.config['config'])
    dbreturn = db.command_excute("""
                SELECT
                    *
                FROM
                    product
                WHERE
                    id = %(id)s
                """, request.json)
    # 沒有商品
    if len(dbreturn) != 1:
        return jsonify({
            'status': "failed",
            'cause': 801
        })
    db.command_excute("""
                         DELETE FROM product
                         WHERE id = %(id)s;
                        """, request.json)
    return jsonify({
        'status': 'success',
        'cause': 800
    })
@app.route("/get_product", methods = ["POST"])
def get_product():
    db = database_utils(current_app.config['config'])
    dbreturn = db.command_excute("""
                   SELECT
                       *
                   FROM
                       product
                   WHERE
                       id = %(id)s
                   """, request.json)
    # 超過一筆資料或沒有任何資料
    if len(dbreturn) != 1:
        return jsonify({
            'status': "failed",
            'cause': 901
        })
    return jsonify({
            'shop_id': dbreturn[0]['shop_id'],
            'name': dbreturn[0]['name'],
            'price': dbreturn[0]['price'],
            'number': dbreturn[0]['number'],
            'intro': dbreturn[0]['intro'],
            'category': dbreturn[0]['category'],
            'picture_id': dbreturn[0]['picture_id'],
            'avgstar': dbreturn[0]['avgstar'],
            'status': dbreturn[0]['status']
        })
