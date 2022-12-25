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
                VALUES (%(shop_id)s, %(name)s, %(price)s, %(number)s, %(intro)s, %(category)s, %(picture_id)s , 0.0, %(status)s)
                """, request.json)
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
@app.route("/create_order", methods = ["POST"])
def create_order():
    require_field = ['owner_id', 'start_time', 'end_time', 'payment', 'status', 'free_fee', 'price', 'address', 'product_id', 'number']
    for need in require_field:
        if need not in request.json.keys():
            return jsonify({"status": "failed", "cause": 1101})
    db = database_utils(current_app.config['config'])
    db.command_excute("""
                       INSERT INTO `order` (owner_id, start_time, end_time, payment, status, free_fee, price, address)
                       VALUES (%(owner_id)s, %(start_time)s, %(end_time)s, %(payment)s, %(status)s, %(free_fee)s, %(price)s, %(address)s)
                       """, request.json)

    temp = request.json
    temp['order_id'] = db.command_excute("""SELECT LAST_INSERT_ID() AS id;""", {})[0]['id']
    # order_detail
    db.command_excute("""
                          INSERT INTO order_detail (order_id, product_id, number)
                          VALUES (%(order_id)s, %(product_id)s, %(number)s)
                          """, temp)
    return jsonify({
        'status': "success",
        'cause': 1100
    })

@app.route("/get_order", methods = ["POST"])
def get_order():
    require_field = ['id']
    for need in require_field:
        if need not in request.json.keys():
            return jsonify({"status": "failed", "cause": 1201})
    db = database_utils(current_app.config['config'])
    order = db.command_excute("""
                         SELECT
                             *
                         FROM
                             `order`
                         WHERE
                             id = %(id)s
                         """, request.json)
    orderDetail = db.command_excute("""
                             SELECT
                                 *
                             FROM
                                 order_detail
                             WHERE
                                 order_id = %(id)s
                             """, request.json)
    if len(order) != 1 or len(orderDetail) != 1:
        return jsonify({
            'status': "failed",
            'cause': 1202
        })
    return jsonify({
        'owner_id': order[0]['owner_id'],
        'start_time': order[0]['start_time'],
        'end_time': order[0]['end_time'],
        'payment': order[0]['payment'],
        'status': order[0]['status'],
        'free_fee': order[0]['free_fee'],
        'price': order[0]['price'],
        'address': order[0]['address'],
        'product_id': orderDetail[0]['product_id'],
        'number': orderDetail[0]['number']
    })
@app.route("/delete_order", methods = ["POST"])
def delete_order():
    require_field = ['id']
    for need in require_field:
        if need not in request.json.keys():
            return jsonify({"status": "failed", "cause": 1201})
    db = database_utils(current_app.config['config'])
    detail = db.command_excute("""
                         SELECT
                             *
                         FROM
                             `order`
                         WHERE
                             id = %(id)s
                         """, request.json)
    # 沒有此order
    if len(detail) == 0:
        return jsonify({
            'status': "failed",
            'cause': 1301
        })
    db.command_excute("""
                           DELETE FROM `order`
                           WHERE id = %(id)s;
                          """, request.json)
    # db.command_excute("""
    #                         DELETE FROM order_detail
    #                         WHERE order_id = %(id)s;
    #                         """, request.json)
    return jsonify({
            'status': "success",
            'cause': 1300
        })


@app.route("/add_comment", methods = ["POST"])
def add_comment():
    db = database_utils(current_app.config['config'])
    dbreturn = db.command_excute("""
                     SELECT
                         *
                     FROM
                         comment
                     WHERE
                         order_id = %(order_id)s
                     """, request.json)
    # 已經評論過
    if len(dbreturn) != 0:
        return jsonify({
            'status': "failed",
            'cause': 1001
        })
    require_field = ["order_id", "product_id", "star", "description", "picture", "time"]
    for need in require_field:
        if need not in request.json.keys():
            return jsonify({"status": "failed", "cause": 1002})

    db.command_excute("""
                    INSERT INTO comment (order_id, product_id, star, description, picture, time)
                    VALUES (%(order_id)s, %(product_id)s, %(star)s, %(description)s, %(picture)s, %(time)s)
                    """, request.json)

    average = db.command_excute("""
                     SELECT
                         AVG(star)
                     FROM
                         comment
                     WHERE
                         product_id = %(product_id)s
                     """, request.json)
    temp = request.json
    temp["average"] = average[0]["AVG(star)"]
    db.command_excute("""
                         UPDATE product
                         SET avgstar = %(average)s
                         WHERE id = %(product_id)s
                        """, temp)
    return jsonify({
        'status': "success",
        'cause': 1000
    })




@app.route("/get_comment", methods=["POST"])
def get_comment():
    require_field = ['product_id']
    for need in require_field:
        if need not in request.json.keys():
            return jsonify({"status": "failed", "cause": 1401})
    db = database_utils(current_app.config['config'])
    comments = db.command_excute("""
                             SELECT
                                 *
                             FROM
                                 comment
                             WHERE
                                 product_id = %(product_id)s
                             """, request.json)

    if len(comments) == 0:
        return jsonify({
            'status': "no comment"
        })
    return jsonify(
          comments
    )
@app.route("/add_productToCart", methods=["POST"])
def add_productToCart():
    require_field = ['owner_id', 'product_id', 'count']
    for need in require_field:
        if need not in request.json.keys():
            return jsonify({"status": "failed", "cause": 1501})

    db = database_utils(current_app.config['config'])
    cartInfo = db.command_excute("""
                                 SELECT
                                     *
                                 FROM
                                     cart
                                 WHERE
                                     owner_id = %(owner_id)s AND product_id = %(product_id)s
                                 """, request.json)
    # 購物車裡面已經有此商品
    if len(cartInfo) != 0:
        return jsonify({
            'status': "failed",
            'cause': 1502
        })
    db.command_excute("""
                        INSERT INTO cart (owner_id, product_id, count)
                        VALUES (%(owner_id)s, %(product_id)s, %(count)s)
                        """, request.json)

    return jsonify({
        'status': "success",
        'cause': 1500
    })
@app.route("/get_productsToCart", methods=["POST"])
def get_productsToCart():
    require_field = ['owner_id']
    for need in require_field:
        if need not in request.json.keys():
            return jsonify({"status": "failed", "cause": 1601})

    db = database_utils(current_app.config['config'])
    allProduct = db.command_excute("""
                                 SELECT
                                     *
                                 FROM
                                     cart
                                 WHERE
                                     owner_id = %(owner_id)s 
                                 """, request.json)
    return jsonify(
        allProduct
    )

@app.route("/delete_productToCart", methods=["POST"])
def delete_productToCart():
    require_field = ['owner_id', 'product_id']
    for need in require_field:
        if need not in request.json.keys():
            return jsonify({"status": "failed", "cause": 1701})
    db = database_utils(current_app.config['config'])
    cartProduct = db.command_excute("""
                                     SELECT
                                         *
                                     FROM
                                         cart
                                     WHERE
                                         owner_id = %(owner_id)s AND product_id = %(product_id)s
                                     """, request.json)
    #沒有此產品
    if len(cartProduct) != 1:
        return jsonify({
            'status': "failed",
            'cause': 1702
        })
    db.command_excute("""
                               DELETE FROM cart
                               WHERE owner_id = %(owner_id)s AND product_id = %(product_id)s;
                              """, request.json)
    return jsonify({
        'status': "success",
        'cause': 1700
    })
