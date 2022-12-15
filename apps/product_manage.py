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

    if file and check:
        filename =  str(uuid.uuid4()) + "." + extension
        file.save(os.path.join(current_app.config["config"]["UploadFolder"], filename))
        db = database_utils(current_app.config['config'])
        db.command_excute("""
                        INSERT INTO picture (file_path) 
                        VALUES (%(file_path)s);
                        """, {"file_path": (current_app.config["config"]["UploadFolder"] + "/" + filename)}
                          )
        db.commit_change()
        dbreturn = db.command_excute("""
                    SELECT 
                        id
                    FROM 
                        picture 
                    WHERE 
                        file_path = (%(file_path)s)
                    """, {"file_path": (current_app.config["config"]["UploadFolder"] + "/" + filename)}
        )
        return jsonify({
            'id': dbreturn[0]['id'],
            'status': "success",
            'cause': 666
        })
    return jsonify({
        'status': "跑出來了",
        'cause': 666
    })
@app.route("/upload_product", methods=["POST"])
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
    #已有這個商品
    if len(dbreturn) != 0 :
        return jsonify({
            'status': "failed",
            'cause' : 601
        })
    #商品價格不符合database標準
    # if len(request.json['price']) < 2:
    #     return jsonify({
    #         'status': 'failed',
    #         'cause': 602
    #     })
    #price,number轉型
    copy_request = request.json
    copy_request['shop_id'] = int(copy_request['shop_id'])
    copy_request['price'] = int(copy_request['price'])
    copy_request['number'] = int(copy_request['number'])
    copy_request['category'] = int(copy_request['category'])
    copy_request['status'] = int(copy_request['status'])
    #有條件未填
    if len(request.json) != 8:
        return jsonify({
            'status': 'failed',
            'cause': 602
        })
    db.command_excute("""
                INSERT INTO accounts ( shop_id, name, price, number, intro, category, picture_id, avgstar , status) 
                VALUES ( %(shop_id)d, %(name)s, %(price)d, %(number)d, %(intro)s, %(category)d, %(picture_id)d , '0' , %(status)d)
                """, copy_request
                )
    db.commit_change()
