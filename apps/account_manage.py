import time
import json
import hashlib
from datetime import datetime
from flask import Flask, render_template, request, redirect, url_for, Blueprint, jsonify, current_app, make_response
from module.configs import configure_collection
from module.picture_utils import get_new_pic

from module.data_utils import database_utils

app = Blueprint('account_manage', __name__)


@app.route("/Register", methods=['POST'])
def register():
    """
    註冊使用者並且確認Email是否重複
    ---
        tags:
            - Login
        produces: application/json,
        parameters:
        - name: account_id
          in: body
          type: string
          required: true
          default: None
    """
    # connect database
    db = database_utils(current_app.config['config'])
    dbreturn = db.command_excute("""
        SELECT 
            * 
        FROM 
            accounts 
        WHERE 
            email = %(email)s 
        """, request.json)

    # success or fail return
    if len(dbreturn) != 0:
        return jsonify({
            'cause': 151
        })

    # 修感
    if len(request.json['password']) < 6:
        return jsonify({
            'cause': 152
        })
    require_field = ["account_id", "name", "email", "phone", "password"]
    for need in require_field:
        if need not in request.json.keys():
            return jsonify({"cause": 153 })

    account_info = request.json
    account_info['password'] = hashlib.sha256(current_app.config['crypto'].decrypt(request.json['password']).encode("utf-8")).hexdigest()
    db.command_excute("""
            INSERT INTO accounts (account_id, name, email, phone, password) 
            VALUES (%(account_id)s, %(name)s, %(email)s, %(phone)s, %(password)s)
            """, account_info)
    user_id = db.command_excute("""SELECT LAST_INSERT_ID() AS id;""", {})[0]['id']
    token = current_app.config['jwt'].generate_token({"user_id": user_id, "admin": 0})
    res = make_response(json.dumps({
        "cause": 0
    }))

    res.set_cookie("Token", token, expires=time.time() + 60 * 60)
    return res


@app.route("Login", methods=['POST'])
def login():
    auth_info = request.json

    auth_info['password'] = hashlib.sha256(current_app.config['crypto'].decrypt(request.json['password']).encode("utf-8")).hexdigest()
    db = database_utils(current_app.config['config'])
    dbreturn = db.command_excute("""
            SELECT 
                * 
            FROM 
                accounts 
            WHERE 
                email = %(email)s AND password = %(password)s
            """, auth_info)

    if len(dbreturn) == 1:
        db.command_excute("""
           UPDATE accounts
           SET last_login = %(date)s
           WHERE accounts.id = %(user_id)s
           """, {"user_id": dbreturn[0]['id'], "date": datetime.now().strftime("%Y/%m/%d %H:%M:%S")})
        token = current_app.config['jwt'].generate_token({"user_id": dbreturn[0]['id'], "admin": 0})
        res = make_response(json.dumps({
            "cause": 0
        }))

        res.set_cookie("User_Token", token, expires=time.time() + 60 * 60)
        return res
    elif len(dbreturn) > 1:
        return jsonify({"cause": 102})
    else:
        return jsonify({"cause": 101})


@app.route("Logoff", methods=['POST'])
def logoff():
    if request.cookies.get('User_Token') is None: return "", 401
    if not current_app.config['jwt'].check_token_valid(request.cookies.get('User_Token')):
        return "", 401
    user_info = current_app.config['jwt'].get_token_detail(request.cookies.get('User_Token'))
    db = database_utils(current_app.config['config'])
    db.command_excute("""
               UPDATE accounts
               SET last_login = %(date)s
               WHERE accounts.id = %(user_id)s
               """, {"user_id": user_info['user_id'], "date": datetime.now().strftime("%Y/%m/%d %H:%M:%S")})
    res = make_response(json.dumps({
        "cause": 0
    }))
    res.set_cookie("User_Token", "", expires=time.time() - 1)
    return res


@app.route("/GetUserDetail", methods=["POST"])
def get_user_detail():
    require_field = request.json['require']
    if request.cookies.get('User_Token') is None:
        return "", 401
    if not current_app.config['jwt'].check_token_valid(request.cookies.get('User_Token')):
        return "", 401
    user_info = current_app.config['jwt'].get_token_detail(request.cookies.get('User_Token'))
    db = database_utils(current_app.config['config'])
    dbreturn = db.command_excute("""
                                SELECT *
                                FROM accounts
                                LEFT JOIN picture ON accounts.photo = picture.id
                                WHERE accounts.id = %(user_id)s
                                """, user_info)

    if len(dbreturn) == 0:
        return jsonify({"cause": 202})

    res = {}
    for require in require_field:
        res[require] = dbreturn[0][require]

    res["cause"] = 0

    return jsonify(res)


@app.route("/ChangePassword",  methods=["POST"])
def change_password():
    token = request.cookies.get("User_Token")
    if token is None: return "", 401
    if not current_app.config['jwt'].check_token_valid(token):
        return "", 401

    user_info = current_app.config['jwt'].get_token_detail(token)

    require_key = ["old", "new"]
    request_json: dict = request.json
    for key in require_key:
        if key not in request_json.keys():
            return "", 401

    old_password = hashlib.sha256(current_app.config["crypto"].decrypt(request_json['old']).encode("utf-8")).hexdigest()
    new_password = hashlib.sha256(current_app.config["crypto"].decrypt(request_json['new']).encode("utf-8")).hexdigest()

    if old_password == new_password:
        return jsonify({"cause": 203})

    db = database_utils(current_app.config['config'])
    dbreturn = db.command_excute("""
                                SELECT *
                                FROM accounts
                                WHERE accounts.id = %(user_id)s
                                """, {"user_id": user_info["user_id"]})
    if dbreturn == 0:
        return jsonify({"cause": 204})

    db.command_excute("""
    UPDATE accounts
    SET password = %(new_password)s
    WHERE accounts.id = %(user_id)s
    """, {"user_id": user_info["user_id"], "new_password": new_password})

    db.command_excute("""
                   UPDATE accounts
                   SET last_login = %(date)s
                   WHERE accounts.id = %(user_id)s
                   """, {"user_id": user_info['user_id'], "date": datetime.now().strftime("%Y/%m/%d %H:%M:%S")})

    return jsonify({"cause": 0})


@app.route("/ChangeProfile", methods=["POST"])
def change_profile():

    token = request.cookies.get("User_Token")
    if token is None: return "", 301
    if not current_app.config['jwt'].check_token_valid(token):
        return "", 301

    user_info = current_app.config['jwt'].get_token_detail(token)
    # request不能給我這些東西
    not_require_key = ["account_id", "password", "id"]
    request_json: dict = request.json
    for key in not_require_key:
        if key in request_json.keys():
            return "", 301

    # 確認使用者使否存在
    db = database_utils(current_app.config['config'])
    dbreturn = db.command_excute("""
                                    SELECT *
                                    FROM accounts
                                    WHERE accounts.id = %(user_id)s
                                    """, {"user_id": user_info["user_id"]})
    if dbreturn == 0:
        return jsonify({"status": "failed", "cause": 302})

    # 確認使用者輸入內容
    require_key = ["name", "email", "phone", "photo"]
    request_json: dict = request.json

    update_str = []

    # 檢查傳入內容
    for key in require_key:
        if key in request_json.keys():
            # 檢查是否含有圖片檔案
            if key == 'photo':
                update_str.append('photo = %(photo)s')
                # 進行圖片資料解析
                img_id = get_new_pic(request.json[key])
                if img_id < 0:
                    return jsonify({"status": "fail", "cause": 401})
                else:
                    user_info[key] = img_id
            else:
                user_info[key] = request.json[key]
                update_str.append(key + " = %(" + key + ")s")

    print("UPDATE accounts SET " + ','.join(update_str) + " WHERE accounts.id = %(user_id)s")
    db.command_excute("UPDATE accounts SET " + ','.join(update_str) + " WHERE accounts.id = %(user_id)s", user_info)

    db.command_excute("""
                   UPDATE accounts
                   SET last_login = %(date)s
                   WHERE accounts.id = %(user_id)s
                   """, {"user_id": user_info['user_id'], "date": datetime.now().strftime("%Y/%m/%d %H:%M:%S")})

    return jsonify({"cause": 0})

@app.route("RegisterShop", methods=['POST'])
def register_shop():
    token = request.cookies.get("User_Token")
    if token is None: return "", 401
    if not current_app.config['jwt'].check_token_valid(token):
        return "", 401

    user_info = current_app.config['jwt'].get_token_detail(token)
    print(user_info)
    db = database_utils(current_app.config['config'])
    # 確認此account是否有shop
    check_shop = db.command_excute("""
                                        SELECT *
                                        FROM shop
                                        WHERE owner_id = %(user_id)s
                                        """, user_info)
    if len(check_shop) != 0:
        return jsonify({
            'cause': 202
        })
    require_field = ["name", "intro"]
    for need in require_field:
        if need not in request.json.keys():
            return jsonify({"status": "failed", "cause": 201})

    # 如果有附logo
    shopInfo = request.json
    shopInfo["owner_id"] = user_info["user_id"]
    shopInfo["time"] = datetime.now().strftime("%Y/%m/%d %H:%M:%S")
    if "logo" not in request.json.keys():
        shopInfo["logo"] = 1
    db.command_excute("""
                    INSERT INTO publisher 
                    VALUES(publisher_id)
                    """, {})
    shopInfo['publisher_id'] = db.command_excute("""SELECT LAST_INSERT_ID() AS id;""", {})[0]['id']
    db.command_excute("""
                       INSERT INTO shop(owner_id, name, avgstar, intro, last_login, logo, publisher_id) 
                       VALUES (%(owner_id)s, %(name)s, 0, %(intro)s, %(time)s, %(logo)s, %(publisher_id)s)
                       """, shopInfo)

    return jsonify({
        'cause': 0
    })

@app.route("/PublicKey", methods=['GET'])
def publickey():
    return current_app.config['crypto'].get_pubkey()

# @app.route("GetAllCoupon", methods=['POST'])
# def get_all_coupon():
#     db = database_utils(current_app.config['config'])
#
# iJx5e0gQ9NkgVExZYV1Afke6Jf2VhXmp3HA0SvJbZr/UwMuJWh3uSEW44MuYhpyBOSTxoe/EfKE/Ie+z8i9lNchPUuBWrNLlZzQ+ddmA0ldTrzBp1QH9v6Z44I/mJ0KhtvEJF3DDp/jdRQbcLe3S9pnGPOqpAuXm87bj0chjYVsS23IOX+9TuPANfvwDWe6lB74tve9v+xhgys3d7wm8gZj5nOTnDcrSi4em8P4ZKdYH3gFmW/d8Vgqzj72xMX7eIgJrzY0MTpSlWH++xhVzuDm9rw/UVH0BSaLpZLYcCLQyPnfvtwMqCsrEXJvKJnFs45cWoJ3p8eMQaFqMf3vfGQ==
