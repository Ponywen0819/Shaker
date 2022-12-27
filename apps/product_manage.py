# uuid(要確定沒有重複)隨機生產圖片id->存回product_img
# 加入sql到uuid
from flask import Flask, render_template, request, redirect, url_for, Blueprint, jsonify, current_app, make_response
from module.configs import configure_collection
import time
import json
from datetime import datetime, timedelta
import os
import uuid
from module.data_utils import database_utils
app = Blueprint('product_manage', __name__)


@app.route("/UploadPicture", methods=["POST"])
def upload_picture():
    if 'file' not in request.files:
        return jsonify({
            'cause': 603
        })
    file = request.files['file']
    if file.filename == '':
        return jsonify({
            'cause': 604
        })

    extension = file.filename.split(".")[1]
    check = False
    if(extension == "jpg" or extension == "png" or extension == "jpeg"):
        check = True
    # 副檔名不對
    if not check:
        return jsonify({
            'cause': 605
        })
    # 看圖檔是否已經存在
    filename = str(uuid.uuid4()) + "." + extension
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
        'cause': 0
    })


@app.route("/UploadProduct", methods = ["POST"])
def upload_product():
    # 確認token(account)
    token = request.cookies.get("User_Token")
    if token is None: return "", 601
    if not current_app.config['jwt'].check_token_valid(token):
        return "", 601
    user_info = current_app.config['jwt'].get_token_detail(token)
    # 有條件未填
    require_field = ["name", "price", "number", "intro", "category", "picture_id", "status"]
    for need in require_field:
        if need not in request.json.keys():
            return jsonify({"status": "failed", "cause": 603})
    db = database_utils(current_app.config['config'])
    # 確認是否有這個shop
    check_shop = db.command_excute("""
        SELECT
            id
        FROM
            shop
        WHERE
            owner_id = %(user_id)s
        """, user_info)
    if len(check_shop) != 1:
        return jsonify({
            'cause': 602
        })
    product_info = request.json
    product_info["shop_id"] = check_shop[0]["id"]
    product_info["time"] = datetime.now().strftime("%Y/%m/%d %H:%M:%S")
    check_product = db.command_excute("""
        SELECT
            *
        FROM
            product
        WHERE
            shop_id = %(shop_id)s AND name = %(name)s
        """, product_info)
    # 已有這個商品
    if len(check_product) != 0:
        return jsonify({
            'cause': 602
        })
    # 插入商品
    db.command_excute("""
                INSERT INTO product (shop_id, name, price, number, intro, category, picture_id, avgstar, status)
                VALUES (%(shop_id)s, %(name)s, %(price)s, %(number)s, %(intro)s, %(category)s, %(picture_id)s , 0.0, %(status)s)
                """, product_info)
    # 更新時間
    db.command_excute("""
                       UPDATE shop
                       SET last_login = %(time)s
                       WHERE id = %(shop_id)s
                       """, product_info)
    return jsonify({
        'cause': 0
    })

@app.route("/ModifyProduct", methods = ["POST"])
def modify_product():
    # 確認token(account)
    token = request.cookies.get("User_Token")
    if token is None: return "", 601
    if not current_app.config['jwt'].check_token_valid(token):
        return "", 601
    user_info = current_app.config['jwt'].get_token_detail(token)
    db = database_utils(current_app.config['config'])
    # 確認是否有這個shop
    check_shop = db.command_excute("""
           SELECT
               id
           FROM
               shop
           WHERE
               owner_id = %(user_id)s
           """, user_info)
    if len(check_shop) != 1:
        return jsonify({
            'cause': 602
        })
    # 不能更改shop_id以及更改的時候一定要有product_id
    if "shop_id" in request.json.keys():
        return jsonify({"cause": 701})
    temp = request.json
    temp["shop_id"] = check_shop[0]["id"]
    check_product = db.command_excute("""
            SELECT
                *
            FROM
                product
            WHERE
                id = %(id)s AND shop_id = %(shop_id)s
            """, temp)
    # 須找到商品
    if len(check_product) != 1:
        return jsonify({
            'cause': 702
        })
    # 若沒有要更新則照原本data
    info = request.json
    require_field = ["name", "price", "number", "intro", "category", "picture_id", "status"]
    for modify in require_field:
        if modify not in request.json.keys():
            info[modify] = check_product[0].get(modify)
            info["time"] = datetime.now().strftime("%Y/%m/%d %H:%M:%S")
            info["shop_id"] = check_shop[0]["id"]
    db.command_excute("""
                     UPDATE product
                     SET name = %(name)s, price = %(price)s, number = %(number)s, intro = %(intro)s, category = %(category)s, picture_id = %(picture_id)s, status = %(status)s
                     WHERE id = %(id)s
                    """, info)
    # 更新時間
    db.command_excute("""
                           UPDATE shop
                           SET last_login = %(time)s
                           WHERE id = %(shop_id)s
                           """, info)
    return jsonify({
        'cause': 0
    })



@app.route("/DeleteProduct", methods = ["POST"])
def delete_product():
    # 確認token(account)
    token = request.cookies.get("User_Token")
    if token is None: return "", 601
    if not current_app.config['jwt'].check_token_valid(token):
        return "", 601
    user_info = current_app.config['jwt'].get_token_detail(token)
    db = database_utils(current_app.config['config'])
    # 確認是否有這個shop
    check_shop = db.command_excute("""
               SELECT
                   id
               FROM
                   shop
               WHERE
                   owner_id = %(user_id)s
               """, user_info)
    if len(check_shop) != 1:
        return jsonify({
            'cause': 602
        })
    if "id" not in request.json.keys():
        return jsonify({
            'cause': 602
        })
    temp = request.json
    temp["shop_id"] = check_shop[0]["id"]
    check_product = db.command_excute("""
                SELECT
                    *
                FROM
                    product
                WHERE
                    id = %(id)s AND shop_id = %(shop_id)s
                """, temp)
    # 沒有商品
    if len(check_product) != 1:
        return jsonify({
            'cause': 801
        })
    db.command_excute("""
                         DELETE FROM product
                         WHERE id = %(id)s;
                        """, request.json)
    shop_info_upload = {}
    shop_info_upload["time"] = datetime.now().strftime("%Y/%m/%d %H:%M:%S")
    shop_info_upload["shop_id"] = check_shop[0]["id"]
    # 更新時間
    db.command_excute("""
                               UPDATE shop
                               SET last_login = %(time)s
                               WHERE id = %(shop_id)s
                               """, shop_info_upload)
    return jsonify({
        'cause': 0
    })
@app.route("/GetProduct", methods = ["POST"])
def get_product():
    # 確認token(account)
    token = request.cookies.get("User_Token")
    if token is None:
        require_field = ['id']
        for need in require_field:
            if need not in request.json.keys():
                return jsonify({"cause": 1101})
        db = database_utils(current_app.config['config'])
        product_list = None
        for product_id in request.json["id"]:
            product_list.append(db.command_excute("""
                               SELECT
                                   *
                               FROM
                                   product
                               WHERE
                                   id = %(id)s
                               """, {"id": product_id}))
        return jsonify(product_list)
    if not current_app.config['jwt'].check_token_valid(token):
        return "", 601
    user_info = current_app.config['jwt'].get_token_detail(token)
    require_field = ['id']
    for need in require_field:
        if need not in request.json.keys():
            return jsonify({"cause": 1101})
    db = database_utils(current_app.config['config'])
    product_list = []
    for product_id in request.json["id"]:
        product_list.append(db.command_excute("""
                       SELECT
                           *
                       FROM
                           product
                       WHERE
                           id = %(id)s
                       """, {"id": product_id}))
    account_info = {}
    account_info["time"] = datetime.now().strftime("%Y/%m/%d %H:%M:%S")
    account_info["shop_id"] = user_info["user_id"]
    # 更新時間
    db.command_excute("""
                                   UPDATE accounts
                                   SET last_login = %(time)s
                                   WHERE id = %(shop_id)s
                                   """, account_info)
    return jsonify(product_list)
@app.route("/GetProductFromShop", methods = ["POST"])
def get_product_from_shop():
    # 確認token(account)
    token = request.cookies.get("User_Token")
    if token is None:
        require_field = ['shop_id']
        for need in require_field:
            if need not in request.json.keys():
                return jsonify({"cause": 1101})
        db = database_utils(current_app.config['config'])
        product = db.command_excute("""
                           SELECT
                               *
                           FROM
                               product
                           WHERE
                               shop_id = %(shop_id)s
                           """, request.json)
        return jsonify(product)

    if not current_app.config['jwt'].check_token_valid(token):
        return "", 601
    user_info = current_app.config['jwt'].get_token_detail(token)
    require_field = ['shop_id']
    for need in require_field:
        if need not in request.json.keys():
            return jsonify({"cause": 1101})
    db = database_utils(current_app.config['config'])
    product = db.command_excute("""
                   SELECT
                       *
                   FROM
                       product
                   WHERE
                       shop_id = %(shop_id)s
                   """, request.json)
    account_info = {}
    account_info["time"] = datetime.now().strftime("%Y/%m/%d %H:%M:%S")
    account_info["shop_id"] = user_info["user_id"]
    # 更新時間
    db.command_excute("""
                                   UPDATE accounts
                                   SET last_login = %(time)s
                                   WHERE id = %(shop_id)s
                                   """, account_info)
    return jsonify(product)
@app.route("/CreateOrder", methods = ["POST"])
def create_order():
    # 確認token(account)
    token = request.cookies.get("User_Token")
    if token is None: return "", 601
    if not current_app.config['jwt'].check_token_valid(token):
        return "", 601
    user_info = current_app.config['jwt'].get_token_detail(token)
    # 'owner_id', 'start_time', 'end_time'
    require_field = ['payment', 'status', 'free_fee', 'price', 'address', 'product_id', 'number']
    for need in require_field:
        if need not in request.json.keys():
            return jsonify({"cause": 1101})
    info = request.json
    info["owner_id"] = user_info["user_id"]
    info["start_time"] = datetime.now().strftime("%Y/%m/%d %H:%M:%S")
    info["end_time"] = (datetime.now() + timedelta(days=7)).strftime("%Y/%m/%d %H:%M:%S")
    db = database_utils(current_app.config['config'])
    # 確認有這個商品
    check_product = db.command_excute("""
                   SELECT
                       shop_id
                   FROM
                       product
                   WHERE
                       id = %(product_id)s
                   """, info)
    if len(check_product) != 1:
        return jsonify({
            'cause': 901
        })
    db.command_excute("""
                       INSERT INTO `order` (owner_id, start_time, end_time, payment, status, free_fee, price, address)
                       VALUES (%(owner_id)s, %(start_time)s, %(end_time)s, %(payment)s, %(status)s, %(free_fee)s, %(price)s, %(address)s)
                       """, info)

    temp = request.json
    temp['order_id'] = db.command_excute("""SELECT LAST_INSERT_ID() AS id;""", {})[0]['id']
    # order_detail
    db.command_excute("""
                          INSERT INTO order_detail (order_id, product_id, number)
                          VALUES (%(order_id)s, %(product_id)s, %(number)s)
                          """, temp)
    # 更新時間
    db.command_excute("""
                           UPDATE accounts
                           SET last_login = %(start_time)s
                           WHERE id = %(owner_id)s
                           """, info)
    return jsonify({
        'cause': 0
    })

@app.route("/GetOrder", methods = ["POST"])
def get_order():
    # 確認token(account)
    token = request.cookies.get("User_Token")
    if token is None: return "", 601
    if not current_app.config['jwt'].check_token_valid(token):
        return "", 601
    user_info = current_app.config['jwt'].get_token_detail(token)
    require_field = ['id']
    for need in require_field:
        if need not in request.json.keys():
            return jsonify({"cause": 1201})
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
    temp = order[0]
    temp["product_id"] = orderDetail[0]["product_id"]
    temp["number"] = orderDetail[0]["number"]
    account_upload_info = {}
    account_upload_info["time"] = datetime.now().strftime("%Y/%m/%d %H:%M:%S")
    account_upload_info["id"] = user_info["user_id"]
    # 更新時間
    db.command_excute("""
                               UPDATE accounts
                               SET last_login = %(time)s
                               WHERE id = %(id)s
                               """, account_upload_info)
    if len(order) != 1 or len(orderDetail) != 1:
        return jsonify({
            'cause': 1202
        })
    return jsonify(temp)
@app.route("/DeleteOrder", methods = ["POST"])
def delete_order():
    # 確認token(account)
    token = request.cookies.get("User_Token")
    if token is None: return "", 601
    if not current_app.config['jwt'].check_token_valid(token):
        return "", 601
    user_info = current_app.config['jwt'].get_token_detail(token)
    require_field = ['id']
    for need in require_field:
        if need not in request.json.keys():
            return jsonify({"cause": 1301})
    db = database_utils(current_app.config['config'])
    order_info = request.json
    order_info["owner_id"] = user_info["user_id"]
    detail = db.command_excute("""
                         SELECT
                             *
                         FROM
                             `order`
                         WHERE
                             id = %(id)s AND owner_id = %(owner_id)s
                         """, order_info)
    # 沒有此order
    if len(detail) == 0:
        return jsonify({
            'cause': 1302
        })
    db.command_excute("""
                           DELETE FROM `order`
                           WHERE id = %(id)s;
                          """, order_info)
    # db.command_excute("""
    #                         DELETE FROM order_detail
    #                         WHERE order_id = %(id)s;
    #                         """, request.json)
    user_info["time"] = datetime.now().strftime("%Y/%m/%d %H:%M:%S")
    db.command_excute("""
                                  UPDATE accounts
                                  SET last_login = %(time)s
                                  WHERE id = %(user_id)s
                                  """, user_info)
    return jsonify({
            'cause': 0
        })


@app.route("/AddComment", methods = ["POST"])
def add_comment():
    # 確認token(account)
    token = request.cookies.get("User_Token")
    if token is None: return "", 601
    if not current_app.config['jwt'].check_token_valid(token):
        return "", 601
    user_info = current_app.config['jwt'].get_token_detail(token)
    db = database_utils(current_app.config['config'])
    check_order = db.command_excute("""
                     SELECT
                         *
                     FROM
                         `order`
                     WHERE
                         id = %(order_id)s AND owner_id = %(id)s
                     """, {"order_id": request.json["order_id"], "id": user_info["user_id"]})
    # 根本沒下訂單過
    if len(check_order) != 1:
        return jsonify({
            'cause': 1001
        })
    check_comment = db.command_excute("""
                     SELECT
                         *
                     FROM
                         comment
                     WHERE
                         order_id = %(order_id)s
                     """, request.json)
    # 已經評論過
    if len(check_comment) != 0:
        return jsonify({
            'cause': 1001
        })
    require_field = ["order_id", "product_id", "star", "description", "picture"]
    for need in require_field:
        if need not in request.json.keys():
            return jsonify({"cause": 1002})
    comment_info = request.json
    comment_info["time"] = datetime.now().strftime("%Y/%m/%d %H:%M:%S")
    db.command_excute("""
                    INSERT INTO comment (order_id, product_id, star, description, picture, time)
                    VALUES (%(order_id)s, %(product_id)s, %(star)s, %(description)s, %(picture)s, %(time)s)
                    """, comment_info)

    average = db.command_excute("""
                     SELECT
                         AVG(star)
                     FROM
                         comment
                     WHERE
                         product_id = %(product_id)s
                     """, comment_info)
    temp = request.json
    temp["average"] = average[0]["AVG(star)"]
    db.command_excute("""
                         UPDATE product
                         SET avgstar = %(average)s
                         WHERE id = %(product_id)s
                        """, temp)
    # 更新時間
    db.command_excute("""
                                      UPDATE accounts
                                      SET last_login = %(time)s
                                      WHERE id = %(user_id)s
                                      """, {"time": datetime.now().strftime("%Y/%m/%d %H:%M:%S"), "user_id": user_info["user_id"]})
    return jsonify({
        'cause': 0
    })

@app.route("/GetComment", methods=["POST"])
def get_comment():
    # 確認token(account)
    token = request.cookies.get("User_Token")
    if token is None:
        require_field = ['product_id']
        for need in require_field:
            if need not in request.json.keys():
                return jsonify({"cause": 1401})
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
    if not current_app.config['jwt'].check_token_valid(token):
        return "", 601
    user_info = current_app.config['jwt'].get_token_detail(token)
    require_field = ['product_id']
    for need in require_field:
        if need not in request.json.keys():
            return jsonify({"cause": 1401})
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
        # 更新時間
        db.command_excute("""
                                          UPDATE accounts
                                          SET last_login = %(time)s
                                          WHERE id = %(user_id)s
                                          """,
                          {"time": datetime.now().strftime("%Y/%m/%d %H:%M:%S"), "user_id": user_info["user_id"]})
    return jsonify(
          comments
    )
@app.route("/AddProductToCart", methods=["POST"])
def add_productToCart():
    # 確認token(account)
    token = request.cookies.get("User_Token")
    if token is None: return "", 601
    if not current_app.config['jwt'].check_token_valid(token):
        return "", 601
    user_info = current_app.config['jwt'].get_token_detail(token)
    require_field = ['product_id', 'count']
    for need in require_field:
        if need not in request.json.keys():
            return jsonify({"cause": 1501})
    add_info = request.json
    add_info["owner_id"] = user_info["user_id"]
    db = database_utils(current_app.config['config'])
    cartInfo = db.command_excute("""
                                 SELECT
                                     *
                                 FROM
                                     cart
                                 WHERE
                                     owner_id = %(owner_id)s AND product_id = %(product_id)s
                                 """, add_info)
    # 購物車裡面已經有此商品
    if len(cartInfo) != 0:
        return jsonify({
            'cause': 1502
        })
    db.command_excute("""
                        INSERT INTO cart (owner_id, product_id, count)
                        VALUES (%(owner_id)s, %(product_id)s, %(count)s)
                        """, add_info)
    # 更新時間
    db.command_excute("""
                                          UPDATE accounts
                                          SET last_login = %(time)s
                                          WHERE id = %(user_id)s
                                          """,
                      {"time": datetime.now().strftime("%Y/%m/%d %H:%M:%S"), "user_id": user_info["user_id"]})

    return jsonify({
        'cause': 0
    })
@app.route("/GetProductsToCart", methods=["POST"])
def get_productsToCart():
    token = request.cookies.get("User_Token")
    if token is None: return "", 601
    if not current_app.config['jwt'].check_token_valid(token):
        return "", 601
    user_info = current_app.config['jwt'].get_token_detail(token)
    db = database_utils(current_app.config['config'])
    allProduct = db.command_excute("""
                                 SELECT
                                     *
                                 FROM
                                     cart
                                 WHERE
                                     owner_id = %(user_id)s 
                                 """, user_info)
    # 更新時間
    db.command_excute("""
                                              UPDATE accounts
                                              SET last_login = %(time)s
                                              WHERE id = %(user_id)s
                                              """,
                      {"time": datetime.now().strftime("%Y/%m/%d %H:%M:%S"), "user_id": user_info["user_id"]})
    return jsonify(
        allProduct
    )

@app.route("/DeleteProductToCart", methods=["POST"])
def delete_productToCart():
    # 確認token(account)
    token = request.cookies.get("User_Token")
    if token is None: return "", 601
    if not current_app.config['jwt'].check_token_valid(token):
        return "", 601
    user_info = current_app.config['jwt'].get_token_detail(token)
    require_field = ['product_id']
    for need in require_field:
        if need not in request.json.keys():
            return jsonify({"cause": 1701})
    delete_info = request.json
    delete_info["owner_id"] = user_info["user_id"]
    db = database_utils(current_app.config['config'])
    cartProduct = db.command_excute("""
                                     SELECT
                                         *
                                     FROM
                                         cart
                                     WHERE
                                         owner_id = %(owner_id)s AND product_id = %(product_id)s
                                     """, delete_info)
    #沒有此產品
    if len(cartProduct) != 1:
        return jsonify({
            'cause': 1702
        })
    db.command_excute("""
                               DELETE FROM cart
                               WHERE owner_id = %(owner_id)s AND product_id = %(product_id)s;
                              """, delete_info)
    # 更新時間
    db.command_excute("""
                                                  UPDATE accounts
                                                  SET last_login = %(time)s
                                                  WHERE id = %(user_id)s
                                                  """,
                      {"time": datetime.now().strftime("%Y/%m/%d %H:%M:%S"), "user_id": user_info["user_id"]})
    return jsonify({
        'cause': 0
    })
