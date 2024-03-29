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
from module.picture_utils import get_new_pic
from module.seller_center_util import get_shop_id
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
    # 新增圖片file到picture
    db.command_excute("""
                    INSERT INTO picture (file_path) 
                    VALUES (%(file_path)s);
                    """, {"file_path": (current_app.config["config"]["UploadFolder"] + "/" + filename)})
    # 拿picture資訊並回傳
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
    if token is None: return "", 401
    if not current_app.config['jwt'].check_token_valid(token):
        return "", 401
    user_info = current_app.config['jwt'].get_token_detail(token)

    # 有條件未填
    require_field = ["name", "price", "number", "intro", "category", "photo", "status"]
    for need in require_field:
        if need not in request.json.keys():
            return jsonify({"status": "failed", "cause": 603})
    db = database_utils(current_app.config['config'])

    # 取得商店ID
    shop_id = get_shop_id(user_info['user_id'])

    if shop_id == -1:
        return jsonify({'cause': 601})

    product_info = request.json
    product_info["shop_id"] = shop_id
    product_info["time"] = datetime.now().strftime("%Y/%m/%d %H:%M:%S")
    # 確認是否有商品
    check_product = db.command_excute("""
        SELECT *
        FROM product
        WHERE shop_id = %(shop_id)s AND name = %(name)s
    """, product_info)
    # 已有這個商品
    if len(check_product) != 0:
        return jsonify({'cause': 602})

    # 將圖片儲存
    picture_id = get_new_pic(request.json['photo'])

    if picture_id == -1:
        return jsonify({'cause': 602})

    product_info['picture_id'] = picture_id

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

    return jsonify({'cause': 0})


@app.route("/ModifyProduct", methods = ["POST"])
def modify_product():
    # 確認token(account)
    token = request.cookies.get("User_Token")
    if token is None: return "", 401
    if not current_app.config['jwt'].check_token_valid(token):
        return "", 401
    user_info = current_app.config['jwt'].get_token_detail(token)
    db = database_utils(current_app.config['config'])
    # 確認是否有這個shop
    check_shop = db.command_excute("""
        SELECT id
        FROM shop
        WHERE owner_id = %(user_id)s
    """, user_info)
    if len(check_shop) != 1:
        return jsonify({
            'cause': 602
        })
    # 不能更改shop_id以及更改的時候一定要有product_id
    # if "shop_id" in request.json.keys():
    #     return jsonify({"cause": 701})
    temp = request.json
    temp["shop_id"] = check_shop[0]["id"]
    # 確認商品(是否存在等等)
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
    info["time"] = datetime.now().strftime("%Y/%m/%d %H:%M:%S")
    # 更新product資料
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
    if token is None: return "", 401
    if not current_app.config['jwt'].check_token_valid(token):
        return "", 401
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
    # 確認商品
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
    # 刪除商品
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


@app.route("/GetProduct", methods=["POST"])
def get_product():
    # 確認token(account)
    token = request.cookies.get("User_Token")
    if token is None:
        require_field = ['id']
        for need in require_field:
            if need not in request.json.keys():
                return jsonify({"cause": 1101})
        db = database_utils(current_app.config['config'])
        product_list = []
        # 拿取從前端過來的product_id array並回傳
        for product_id in request.json["id"]:
            product_list.append(db.command_excute("""
                               SELECT
                                   *
                               FROM
                                   product
                               JOIN picture ON picture.id = product.picture_id
                               WHERE
                                   product.id = %(id)s
                               """, {"id": product_id})[0])
        return jsonify({'cause': 0, 'data': product_list})
    if not current_app.config['jwt'].check_token_valid(token):
        return "", 601


    user_info = current_app.config['jwt'].get_token_detail(token)
    require_field = ['id']
    for need in require_field:
        if need not in request.json.keys():
            return jsonify({"cause": 1101})
    db = database_utils(current_app.config['config'])
    product_list = []
    # 拿取從前端過來的product_id array並回傳
    for product_id in request.json["id"]:
        product_list.append(db.command_excute("""
                       SELECT
                           *
                       FROM
                           product
                       JOIN picture ON picture.id = product.picture_id
                       WHERE
                           product.id = %(id)s
                       """, {"id": product_id})[0])
    account_info = {}
    account_info["time"] = datetime.now().strftime("%Y/%m/%d %H:%M:%S")
    account_info["shop_id"] = user_info["user_id"]


    # 更新時間
    db.command_excute("""
        UPDATE accounts
        SET last_login = %(time)s
        WHERE id = %(shop_id)s
    """, account_info)
    return jsonify({'cause': 0, 'data': product_list})


@app.route("/GetProductFromShop", methods = ["POST"])
def get_product_from_shop():
    # 確認token(account)
    token = request.cookies.get("User_Token")
    if token is None:
        # 訪客登入時
        require_field = ['shop_id']
        for need in require_field:
            if need not in request.json.keys():
                return jsonify({"cause": 1101})
        db = database_utils(current_app.config['config'])
        # 拿商品資訊
        product = db.command_excute("""
                           SELECT
                               *
                           FROM
                               product
                           JOIN picture ON picture.id = product.picture_id
                           WHERE
                               shop_id = %(shop_id)s AND status = 1
                           """, request.json)
        return jsonify({
            'cause': 0,
            'data': product
        })

    if not current_app.config['jwt'].check_token_valid(token):
        return "", 401
    user_info = current_app.config['jwt'].get_token_detail(token)

    shop_id = get_shop_id(user_info['user_id'])

    db = database_utils(current_app.config['config'])
    # 拿商品資訊
    product = db.command_excute("""
                   SELECT
                       *
                   FROM
                       product
                   LEFT JOIN picture ON picture.id = product.picture_id
                   WHERE
                       shop_id = %(shop_id)s
                   """, {
        'shop_id': shop_id
    })
    account_info = {}
    account_info["time"] = datetime.now().strftime("%Y/%m/%d %H:%M:%S")
    account_info["shop_id"] = user_info["user_id"]
    # 更新時間
    db.command_excute("""
        UPDATE accounts
        SET last_login = %(time)s
        WHERE id = %(shop_id)s
    """, account_info)
    return jsonify({
        'cause': 0,
        'data': product
    })


@app.route("/CreateOrder", methods = ["POST"])
def create_order():
    # 確認token(account)
    token = request.cookies.get("User_Token")
    if token is None: return "", 401
    if not current_app.config['jwt'].check_token_valid(token):
        return "", 401
    user_info = current_app.config['jwt'].get_token_detail(token)
    # 'owner_id', 'start_time', 'end_time'
    require_field = ['product', 'address', 'payment']
    for need in require_field:
        if need not in request.json.keys():
            return jsonify({"cause": 1101})
    info = request.json
    info["owner_id"] = user_info["user_id"]
    info["start_time"] = datetime.now().strftime("%Y/%m/%d %H:%M:%S")
    info["end_time"] = (datetime.now() + timedelta(days=7)).strftime("%Y/%m/%d %H:%M:%S")
    info["status"] = 0
    db = database_utils(current_app.config['config'])
    total_price = 0
    # 判斷商品是否存在以及數量是否足夠
    for i in range(len(info["product"])):
        product = db.command_excute("""
                             SELECT
                                 *
                             FROM
                                 `product`
                             WHERE
                                 id = %(product_id)s
                             """, info['product'][i])
        if len(product) == 0 or product[0]["number"] < info['product'][i]["count"]:
            return jsonify({"cause": 1102})
        total_price += info['product'][i]["count"] * product[0]["price"]
    # 判斷coupon是否存在
    if "coupon_id" in info.keys():
        product_info = {}
        product_info["product"] = info.pop("product")
        # 拿取coupon_type資訊
        coupon = db.command_excute("""
            SELECT
                *
            FROM
                `coupon_type`
            WHERE
                id = %(coupon_id)s
        """, info)
        if len(coupon) == 0:
            return jsonify({"cause": 1103})
        # 低消拉幹，順便算總價
        if coupon[0]["minimum_consumption"] > total_price:
            return jsonify({"cause": 1104})
        if coupon[0]["discount_type"] == 0:
            info["free_fee"] = 1
            info["price"] = total_price
        else:
            info["free_fee"] = 0
            info["price"] = (total_price * coupon[0]["discount"] / 100) + 150
        # 插入新的order
        db.command_excute("""
            INSERT INTO `order` (owner_id, start_time, end_time, payment, status, free_fee, price, address)
            VALUES (%(owner_id)s, %(start_time)s, %(end_time)s, %(payment)s, %(status)s, %(free_fee)s, %(price)s, %(address)s)
        """, info)
        info['order_id'] = db.command_excute("""SELECT LAST_INSERT_ID() AS id;""", {})[0]['id']
        # 同時插入此order的order_detail
        for i in range(len(product_info["product"])):
            db.command_excute("""
                                        INSERT INTO order_detail (order_id, product_id, number)
                                        VALUES (%(order_id)s, %(product_id)s, %(num)s)
                                        """,
                              {"order_id": info["order_id"], "product_id": product_info["product"][i]["product_id"], "num": product_info["product"][i]["count"]})
            db.command_excute("""
                                       DELETE FROM `cart`
                                       WHERE owner_id = %(id)s AND product_id = %(product_id)s;
                                      """, {"id": user_info["user_id"],"product_id":product_info["product"][i]["product_id"]})
            product = db.command_excute("""
                                                 SELECT
                                                     *
                                                 FROM
                                                     product
                                                 WHERE
                                                     id = %(product_id)s
                                                 """, {"product_id": product_info["product"][i]["product_id"]})
            db.command_excute("""
                                               UPDATE product
                                               SET number = %(number)s
                                               WHERE id = %(product_id)s
                                               """, {"product_id": product_info["product"][i]["product_id"],
                                                     "number": product[0]["number"] - product_info["product"][i][
                                                         "count"]})
        # 更新時間
        db.command_excute("""
                               UPDATE accounts
                               SET last_login = %(start_time)s
                               WHERE id = %(owner_id)s
                               """, info)
        return jsonify({
            'cause': 0
        })
    # 沒有折價券拉，總價
    info["price"] = total_price + 150
    info["free_fee"] = 0
    product_info = {}
    product_info["product"] = info.pop("product")
    # 插入新的order
    db.command_excute("""
                        INSERT INTO `order` (owner_id, start_time, end_time, payment, status, free_fee, price, address)
                        VALUES (%(owner_id)s, %(start_time)s, %(end_time)s, %(payment)s, %(status)s, %(free_fee)s, %(price)s, %(address)s)
                        """, info)
    info['order_id'] = db.command_excute("""SELECT LAST_INSERT_ID() AS id;""", {})[0]['id']
    # 同時插入此order的order_detail
    for i in range(len(product_info['product'])):
        db.command_excute("""
                            INSERT INTO order_detail (order_id, product_id, number)
                            VALUES (%(order_id)s, %(product_id)s, %(num)s)
                            """, {"order_id": info["order_id"], "product_id": product_info["product"][i]["product_id"], "num": product_info["product"][i]["count"]})
        db.command_excute("""
                                               DELETE FROM `cart`
                                               WHERE owner_id = %(id)s AND product_id = %(product_id)s;
                                              """,
                          {"id": user_info["user_id"], "product_id": product_info["product"][i]["product_id"]})
        product = db.command_excute("""
                                     SELECT
                                         *
                                     FROM
                                         product
                                     WHERE
                                         id = %(product_id)s
                                     """, {"product_id": product_info["product"][i]["product_id"]})
        db.command_excute("""
                                   UPDATE product
                                   SET number = %(number)s
                                   WHERE id = %(product_id)s
                                   """, {"product_id": product_info["product"][i]["product_id"], "number": product[0]["number"] - product_info["product"][i]["count"]})
    # 更新時間
    db.command_excute("""
                           UPDATE accounts
                           SET last_login = %(start_time)s
                           WHERE id = %(owner_id)s
                           """, info)
    return jsonify({
        'cause': 0
    })


@app.route('/GetOrderList', methods=['POST'])
def get_order_list():
    token = request.cookies.get("User_Token")
    if token is None:
        return '', 401
    user_info = current_app.config['jwt'].get_token_detail(token)
    db = database_utils(current_app.config['config'])
    order_ids = db.command_excute('''
        SELECT *
        FROM `order`
        WHERE owner_id = %(user_id)s
    ''', user_info)
    order_list = order_ids
    for index, order in enumerate(order_ids):
        products = db.command_excute('''
            SELECT 
                order_detail.number,
                product.name,
                product.price,
                picture.file_path AS photo
            FROM order_detail
            LEFT JOIN product on order_detail.product_id = product.id
            LEFT JOIN picture on product.picture_id = picture.id
            WHERE order_detail.order_id = %(order_id)s
        ''', {
            'order_id': order['id']
        })

        order_list[index]['products'] = products

    return jsonify({
        'cause': 0,
        'data': order_list
    })


@app.route('/GetShopOrders', methods=["POST"])
def get_shop_orders():
    token = request.cookies.get("User_Token")
    if token is None:
        return '', 401
    user_info = current_app.config['jwt'].get_token_detail(token)
    db = database_utils(current_app.config['config'])
    order_ids = db.command_excute('''
            SELECT `order`.*
            FROM `order`
                LEFT JOIN order_detail ON `order`.id = order_detail.order_id
	            LEFT JOIN product ON order_detail.product_id = product.id
	            LEFT JOIN shop ON product.shop_id = shop.id
            WHERE `shop`.owner_id = %(user_id)s
        ''', user_info)
    order_list = order_ids
    for index, order in enumerate(order_ids):
        products = db.command_excute('''
                SELECT 
                    order_detail.number,
                    product.name,
                    product.price,
                    picture.file_path AS photo
                FROM order_detail
                LEFT JOIN product on order_detail.product_id = product.id
                LEFT JOIN picture on product.picture_id = picture.id
                WHERE order_detail.order_id = %(order_id)s
            ''', {
            'order_id': order['id']
        })
        print(products)
        order_list[index]['products'] = products

    return jsonify({
        'cause': 0,
        'data': order_list
    })

@app.route('getOrders', methods=["POST"])
def get_orders():
    token = request.cookies.get("User_Token")
    if token is None:
        return '', 401
    user_info = current_app.config['jwt'].get_token_detail(token)
    db = database_utils(current_app.config['config'])

    print(user_info)
    # 確認管理員身份
    admin_info = db.command_excute('''
        SELECT COUNT(*)
        FROM admin
        WHERE id = %(admin_id)s
    ''', user_info)

    if len(admin_info) != 1:
        return '', 401

    order_ids = db.command_excute('''
        SELECT DISTINCT `order`.id AS id,`shop`.name AS shop_name, `order`.status AS status
        FROM `order`
            LEFT JOIN order_detail ON `order`.id = order_detail.order_id
    	    LEFT JOIN product ON order_detail.product_id = product.id
    	    LEFT JOIN shop ON product.shop_id = shop.id
    	ORDER BY `order`.status 
    ''')

    return jsonify({
        'cause': 0,
        'data': order_ids
    })

@app.route("/GetOrder", methods=["POST"])
def get_order():
    # 確認token(account)
    token = request.cookies.get("User_Token")
    if token is None: return "", 401
    if not current_app.config['jwt'].check_token_valid(token):
        return "", 401
    user_info = current_app.config['jwt'].get_token_detail(token)
    require_field = ['id']
    for need in require_field:
        if need not in request.json.keys():
            return jsonify({"cause": 1201})
    db = database_utils(current_app.config['config'])
    # 拿取order
    order = db.command_excute("""
        SELECT
            *
        FROM
            `order`
        WHERE
            id = %(id)s
    """, request.json)
    # 並拿取order_detail
    orderDetail = db.command_excute("""
        SELECT
            *
        FROM
            order_detail
        WHERE
            order_id = %(id)s
    """, request.json)
    temp = order[0]
    product = []
    temp['product'] = []
    for i in range(len(orderDetail)):
        sum = {}
        sum["product_id"] = orderDetail[i]["product_id"]
        sum["num"] = orderDetail[i]["number"]
        product = db.command_excute("""
                             SELECT
                                 picture_id, price, name
                             FROM
                                 product
                             WHERE
                                 id = %(product_id)s
                             """, sum)
        picture = db.command_excute("""
                                     SELECT
                                         *
                                     FROM
                                         picture
                                     WHERE
                                         id = %(picture_id)s
                                     """, {"picture_id": product[0]["picture_id"]})
        sum["picture"] = picture[0]["file_path"]
        sum['product_name'] = product[0]["name"]
        sum['price'] = sum["num"] * product[0]["price"]
        temp["product"].append(sum)
    account_upload_info = {}
    account_upload_info["time"] = datetime.now().strftime("%Y/%m/%d %H:%M:%S")
    account_upload_info["id"] = user_info["user_id"]
    # 更新時間
    db.command_excute("""
                               UPDATE accounts
                               SET last_login = %(time)s
                               WHERE id = %(id)s
                               """, account_upload_info)
    if len(order) != 1 :
        return jsonify({
            'cause': 1202
        })
    return jsonify(temp)


@app.route("/ModifyOrderState", methods=["POST"])
def modify_order_state():
    # 確認token(account)
    token = request.cookies.get("User_Token")
    if token is None: return "", 401
    if not current_app.config['jwt'].check_token_valid(token, True):
        return "", 401
    admin_info = current_app.config['jwt'].get_token_detail(token)
    require_field = ['order_id', 'status']
    for need in require_field:
        if need not in request.json.keys():
            return jsonify({"cause": 2301})
    db = database_utils(current_app.config['config'])
    admin_info = db.command_excute('''
        SELECT COUNT(*)
        FROM admin
        WHERE id = %(admin_id)s
    ''', admin_info)

    if len(admin_info) != 1:
        return '', 401

    # 拿取order資訊，用於查看有沒有此order
    order = db.command_excute("""
        SELECT *
        FROM `order`
        WHERE id = %(order_id)s
    """, request.json)
    if len(order) != 1:
        return jsonify({"cause": 2302})
    # 更新order的status(admin才能修改)
    db.command_excute("""
        UPDATE `order`
        SET status = %(status)s
        WHERE id = %(order_id)s
    """, request.json)
    return jsonify({"cause": 0})


@app.route("/DeleteOrder", methods = ["POST"])
def delete_order():
    # 確認token(account)
    token = request.cookies.get("User_Token")
    if token is None: return "", 401
    if not current_app.config['jwt'].check_token_valid(token):
        return "", 401
    user_info = current_app.config['jwt'].get_token_detail(token)
    require_field = ['id']
    for need in require_field:
        if need not in request.json.keys():
            return jsonify({"cause": 1301})
    db = database_utils(current_app.config['config'])
    order_info = request.json
    order_info["owner_id"] = user_info["user_id"]
    # 拿取order資訊
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
    # 刪除order
    db.command_excute("""
                           DELETE FROM `order`
                           WHERE id = %(id)s;
                          """, order_info)
    # db.command_excute("""
    #                         DELETE FROM order_detail
    #                         WHERE order_id = %(id)s;
    #                         """, request.json)
    user_info["time"] = datetime.now().strftime("%Y/%m/%d %H:%M:%S")
    # 更新時間
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
    if token is None: return "", 401
    if not current_app.config['jwt'].check_token_valid(token):
        return "", 401
    user_info = current_app.config['jwt'].get_token_detail(token)
    db = database_utils(current_app.config['config'])
    # 拿取order資訊
    check_order = db.command_excute("""
                     SELECT
                         *
                     FROM
                         `order`
                     WHERE
                         id = %(order_id)s AND owner_id = %(id)s
                     """, {"order_id": request.json["order_id"], "id": user_info["user_id"]})
    # 根本沒下訂單過或根本還沒完成訂單
    if len(check_order) != 1 or check_order[0]["status"] != 2:
        return jsonify({
            'cause': 1001
        })
    # 拿取comment資訊，用於判斷有沒有評論過
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
            'cause': 1002
        })
    require_field = ["order_id", "star", "description", "picture"]
    for need in require_field:
        if need not in request.json.keys():
            return jsonify({"cause": 1003})
    comment_info = request.json
    comment_info["time"] = datetime.now().strftime("%Y/%m/%d %H:%M:%S")
    # 拿取order_detail
    comment_info["product_id"] = db.command_excute("""
                            SELECT
                                *
                            FROM
                                 order_detail
                            WHERE
                                order_id = %(order_id)s
                            """, request.json)[0]["product_id"]
    # 新增一筆comment
    db.command_excute("""
                    INSERT INTO comment (order_id, product_id, star, description, picture, time)
                    VALUES (%(order_id)s, %(product_id)s, %(star)s, %(description)s, %(picture)s, %(time)s)
                    """, comment_info)
    # 算出此商品的平均評分
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
    # 把上面算出來的數值，更新到product上的avg_star
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
        # 取的comment資訊
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
        return "", 401
    user_info = current_app.config['jwt'].get_token_detail(token)
    require_field = ['product_id']
    for need in require_field:
        if need not in request.json.keys():
            return jsonify({"cause": 1401})
    db = database_utils(current_app.config['config'])
    # 取的comment資訊
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
    db = database_utils(current_app.config['config'])
    # 確認token(account)
    token = request.cookies.get("User_Token")
    if token is None: return "", 401
    if not current_app.config['jwt'].check_token_valid(token):
        return "", 401
    user_info = current_app.config['jwt'].get_token_detail(token)
    # 必要欄位
    require_field = ['product_id', 'count']
    for need in require_field:
        if need not in request.json.keys():
            return jsonify({"cause": 1501})
    # 拿取該product剩餘數量，來判斷顧客給的數量是否超過
    check_product_num = db.command_excute("""
                                 SELECT
                                     number
                                 FROM
                                     product
                                 WHERE
                                     id = %(product_id)s
                                 """, request.json)
    # 沒有此商品
    if len(check_product_num) != 1:
        return jsonify({"cause": 1502})
    # 超過能提供的數量
    if request.json['count'] > check_product_num[0]['number']:
        return jsonify({"cause": 1503})
    # 如果有就用更新並判斷是否超過能提供數目
    add_info = request.json
    add_info["owner_id"] = user_info["user_id"]
    cartInfo = db.command_excute("""
                                SELECT
                                     *
                                 FROM
                                     cart
                                 WHERE
                                     owner_id = %(owner_id)s AND product_id = %(product_id)s
                                 """, add_info)
    # cart已有此商品 -> 更新數量
    if len(cartInfo) == 1:
        db.command_excute("""
                            UPDATE cart
                            SET count = %(count)s
                            WHERE owner_id = %(owner_id)s
                        """, add_info)
    # cart沒有此商品 -> 新增
    elif len(cartInfo) == 0:
        db.command_excute("""
                        INSERT INTO cart (owner_id, product_id, count)
                        VALUES (%(owner_id)s, %(product_id)s, %(count)s)
                        """, add_info)
    # 更新時間
    db.command_excute("""
                        UPDATE accounts
                        SET last_login = %(time)s
                        WHERE id = %(user_id)s
                        """, {"time": datetime.now().strftime("%Y/%m/%d %H:%M:%S"), "user_id": user_info["user_id"]})
    return jsonify({
        'cause': 0
    })


@app.route("/GetProductsToCart", methods=["POST"])
def get_productsToCart():
    token = request.cookies.get("User_Token")
    if token is None: return "", 401
    if not current_app.config['jwt'].check_token_valid(token):
        return "", 401
    user_info = current_app.config['jwt'].get_token_detail(token)
    db = database_utils(current_app.config['config'])
    # 取的使用者cart裡面所有商品資訊
    allProduct = db.command_excute("""
        SELECT
	        cart.count,
	        product.`name`, 
	        product.price, 
	        picture.file_path AS photo, 
	        product.id, 
	        product.number AS remain,
	        shop.`name` AS shop_name,
	        shop.`id` AS shop_id
        FROM
	        cart INNER JOIN product
	        ON cart.product_id = product.id
	        LEFT JOIN picture
	        ON product.picture_id = picture.id
	        INNER JOIN shop
	        ON product.shop_id = shop.id
        WHERE
            cart.owner_id = %(user_id)s 
    """, user_info)
    # 更新時間
    db.command_excute("""
                                              UPDATE accounts
                                              SET last_login = %(time)s
                                              WHERE id = %(user_id)s
                                              """,
                      {"time": datetime.now().strftime("%Y/%m/%d %H:%M:%S"), "user_id": user_info["user_id"]})
    return jsonify(
        {
            'cause': 0,
            'products': allProduct
        }
    )


@app.route("/GetCartProducctsById", methods = ["POST"])
def get_cart_products_by_id():
    token = request.cookies.get("User_Token")
    if token is None:
        return "", 601
    if not current_app.config['jwt'].check_token_valid(token):
        return "", 601
    user_info = current_app.config['jwt'].get_token_detail(token)

    db = database_utils(current_app.config['config'])
    # 確認使用者合法
    user_count = db.command_excute('''
            SELECT COUNT(*)
            FROM accounts
            WHERE id = %(user_id)s
        ''', user_info)


    if user_count[0]['COUNT(*)'] != 1:
        return '', 500


    record = db.command_excute('''
        SELECT
	        cart.count, 
	        product.`name`, 
	        product.price, 
	        picture.file_path AS photo,
	        product.shop_id,
	        product.id AS product_id
        FROM
	        cart
	        LEFT JOIN product
	        ON cart.product_id = product.id
	        LEFT JOIN picture
	        ON product.picture_id = picture.id
	    WHERE cart.owner_id = %(user_id)s AND cart.product_id in %(id_str)s
        ''', {
        'id_str': request.json,
        'user_id': user_info['user_id'],
    })

    db.command_excute("""
            UPDATE accounts
            SET last_login = %(time)s
            WHERE id = %(user_id)s
        """, {
        "time": datetime.now().strftime("%Y/%m/%d %H:%M:%S"),
        "user_id": user_info["user_id"]
    })

    return jsonify({
        'cause': 0,
        'data': record
    })


@app.route('/UploadCartNum', methods=['POST'])
def update_cart_number():
    token = request.cookies.get("User_Token")
    if token is None:
        return "", 601
    if not current_app.config['jwt'].check_token_valid(token):
        return "", 601
    user_info = current_app.config['jwt'].get_token_detail(token)

    require_field = ['id', 'new_count']
    for need in require_field:
        if need not in request.json.keys():
            return jsonify({"cause": 1701})

    db = database_utils(current_app.config['config'])
    # 確認使用者合法
    user_count = db.command_excute('''
        SELECT COUNT(*)
        FROM accounts
        WHERE id = %(user_id)s
    ''', user_info)

    print(user_count)

    if user_count[0]['COUNT(*)'] != 1:
        return '', 500

    db.command_excute('''
        UPDATE cart
        SET count = %(new_count)s
        WHERE owner_id = %(owner_id)s AND product_id = %(product_id)s
    ''',{
        'new_count': request.json['new_count'],
        'owner_id': user_info['user_id'],
        'product_id': request.json['id']
    })

    db.command_excute("""
        UPDATE accounts
        SET last_login = %(time)s
        WHERE id = %(user_id)s
    """,{
        "time": datetime.now().strftime("%Y/%m/%d %H:%M:%S"),
        "user_id": user_info["user_id"]
    })

    return jsonify({
        'cause': 0
    })


@app.route("/DeleteProductToCart", methods=["POST"])
def delete_productToCart():
    # 確認token(account)
    token = request.cookies.get("User_Token")
    if token is None: return "", 401
    if not current_app.config['jwt'].check_token_valid(token):
        return "", 401
    user_info = current_app.config['jwt'].get_token_detail(token)
    require_field = ['product_id']
    for need in require_field:
        if need not in request.json.keys():
            return jsonify({"cause": 1701})
    delete_info = request.json
    delete_info["owner_id"] = user_info["user_id"]
    db = database_utils(current_app.config['config'])
    # 確認使用者cart裡有沒有要刪除的商品
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
    # cart刪除product
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


@app.route("/CreateCategory", methods=["POST"])
def create_category():
    token = request.cookies.get("User_Token")
    if token is None: return "", 401
    if not current_app.config['jwt'].check_token_valid(token, True):
        return "", 401
    admin_info = current_app.config['jwt'].get_token_detail(token)
    require_field = ["name"]
    for need in require_field:
        if need not in request.json.keys():
            return jsonify({"cause": 153})

    db = database_utils(current_app.config['config'])
    # 確認category種類(only admin)
    check_category = db.command_excute("""
                                         SELECT
                                             *
                                         FROM
                                             category_type
                                         WHERE
                                             name = %(name)s
                                         """, request.json)
    if len(check_category) != 0:
        return jsonify({
            'cause': 1801
        })
    # 若前面檢測沒有重複則新增category
    db.command_excute("""
                            INSERT INTO `category_type` (`name`)
                            VALUES (%(name)s)
                            """, request.json)
    return jsonify({"cause": 0})


@app.route("/DeleteCategory", methods=["POST"])
def delete_category():
    token = request.cookies.get("User_Token")
    if token is None: return "", 401
    if not current_app.config['jwt'].check_token_valid(token, True):
        return "", 401
    admin_info = current_app.config['jwt'].get_token_detail(token)
    require_field = ["name"]
    for need in require_field:
        if need not in request.json.keys():
            return jsonify({"cause": 153})

    db = database_utils(current_app.config['config'])
    # 拿取category，判斷是否存在
    check_category = db.command_excute("""
                                             SELECT
                                                 *
                                             FROM
                                                 category_type
                                             WHERE
                                                 name = %(name)s
                                             """, request.json)
    if len(check_category) != 1:
        return jsonify({
            'cause': 1901
        })
    # 刪除category
    db.command_excute("""
                                DELETE FROM category_type
                                WHERE name = %(name)s
                                """, request.json)
    return jsonify({"cause": 0})


@app.route("/GetAllCategory", methods=["GET"])
def get_category():
    db = database_utils(current_app.config['config'])
    # 取的所有category
    all_category = db.command_excute("""
        SELECT *
        FROM category_type
    """, {})

    if len(all_category) <= 0:
        return jsonify({"no category": 1})

    return jsonify(all_category)


@app.route("/SearchProduct", methods=["POST"])
def search_product():
    token = request.cookies.get("User_Token")
    if token is None:
        db = database_utils(current_app.config['config'])
        info = request.json
        if "category" not in request.json and "search_word" in request.json:
            info["search_word"] = "%" + info["search_word"] + "%"
            # 搜尋商品 -> 沒有選擇category
            result = db.command_excute("""
                 SELECT
                     *
                 FROM
                     product 
                 JOIN picture ON picture.id = product.picture_id
                 WHERE 
                    product.name LIKE %(search_word)s
                 """, info)
            return jsonify({
                'cause': 0,
                'data': result
            })
        elif "category" in request.json and "search_word" not in request.json:
            result = db.command_excute("""
                         SELECT
                             *
                         FROM
                             product 
                         JOIN picture ON picture.id = product.picture_id
                         WHERE 
                            product.category = %(category)s
                         """, info)
            return jsonify({
                'cause': 0,
                'data': result
            })
        elif "category" in request.json and "search_word" in request.json:
            info["search_word"] = "%" + info["search_word"] + "%"
            # 搜尋商品 -> 有category
            result = db.command_excute("""
                 SELECT
                     *
                 FROM
                     product 
                 JOIN picture ON picture.id = product.picture_id
                 WHERE 
                    product.name LIKE %(search_word)s AND product.id = %(category)s
                 """, info)
            return jsonify({
                'cause': 0,
                'data': result
            })

        else:
            result = db.command_excute("""
                         SELECT
                             *
                         FROM
                             product 
                         JOIN picture ON picture.id = product.picture_id
                         LIMIT 20;
                         """, info)
            return jsonify({
                'cause': 0,
                'data': result
            })
    if not current_app.config['jwt'].check_token_valid(token):
        return "", 401
    user_info = current_app.config['jwt'].get_token_detail(token)
    db = database_utils(current_app.config['config'])
    info = request.json
    if "category" not in request.json and "search_word" in request.json:
        info["search_word"] = "%" + info["search_word"] + "%"
        # 搜尋商品 -> 沒有選擇category
        result = db.command_excute("""
            SELECT *
            FROM product 
            JOIN picture ON picture.id = product.picture_id
            WHERE product.name LIKE %(search_word)s
        """, info)
        db.command_excute("""
            UPDATE accounts
            SET last_login = %(time)s
            WHERE id = %(user_id)s
        """, {
            "time": datetime.now().strftime("%Y/%m/%d %H:%M:%S"),
            "user_id": user_info["user_id"]
        })
        return jsonify({
            'cause': 0,
            'data': result
        })
    elif "category" in request.json and "search_word" not in request.json:
        result = db.command_excute("""
            SELECT *
            FROM product 
            JOIN picture ON picture.id = product.picture_id
            WHERE product.category = %(category)s
        """, info)
        db.command_excute("""
            UPDATE accounts
            SET last_login = %(time)s
            WHERE id = %(user_id)s
        """, {
            "time": datetime.now().strftime("%Y/%m/%d %H:%M:%S"),
            "user_id": user_info["user_id"]
            })
        return jsonify({
            'cause': 0,
            'data': result
        })
    elif "category" in request.json and "search_word" not in request.json:
        info["search_word"] = "%" + info["search_word"] + "%"
        # 搜尋商品 -> 有category
        result = db.command_excute("""
         SELECT
             *
         FROM
             product 
         JOIN picture ON picture.id = product.picture_id
         WHERE 
            product.name LIKE %(search_word)s AND product.id = %(category)s
         """, info)
        db.command_excute("""
                                                          UPDATE accounts
                                                          SET last_login = %(time)s
                                                          WHERE id = %(user_id)s
                                                          """,
                          {"time": datetime.now().strftime("%Y/%m/%d %H:%M:%S"), "user_id": user_info["user_id"]})
        return jsonify({
            'cause': 0,
            'data': result
        })

    else:
        result = db.command_excute("""
                 SELECT
                     *
                 FROM
                     product 
                 JOIN picture ON picture.id = product.picture_id
                 LIMIT 20;
                 """, info)
        db.command_excute("""
                                                                  UPDATE accounts
                                                                  SET last_login = %(time)s
                                                                  WHERE id = %(user_id)s
                                                                  """,
                          {"time": datetime.now().strftime("%Y/%m/%d %H:%M:%S"), "user_id": user_info["user_id"]})
        return jsonify({
            'cause': 0,
            'data': result
        })

