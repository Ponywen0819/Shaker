import time
import json
import hashlib
from flask import Flask, render_template, request, redirect, url_for, Blueprint, jsonify, current_app, make_response
from module.configs import configure_collection

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
            'status': "failed",
            'cause': 151
        })

    # 修感
    if len(request.json['password']) < 6:
        return jsonify({
            'status': "failed",
            'cause': 152
        })
    require_field = ["account_id", "name", "email", "phone", "password"]
    for need in require_field:
        if need not in request.json.keys():
            return jsonify({"status": "failed", "cause": 153 })

    account_info = request.json
    account_info['password'] = hashlib.sha256(current_app.config['crypto'].decrypt(request.json['password']).encode("utf-8")).hexdigest()
    db.command_excute("""
            INSERT INTO accounts (account_id, name, email, phone, password) 
            VALUES (%(account_id)s, %(name)s, %(email)s, %(phone)s, %(password)s)
            """, account_info)
    user_id = db.command_excute("""SELECT LAST_INSERT_ID() AS id;""", {})[0]['id']
    token = current_app.config['jwt'].generate_token({"user_id": user_id, "admin": 0})
    res = make_response(json.dumps({
        "status": "success",
        "cause": 150
    }))

    res.set_cookie("Token", token, expires=time.time() + 6 * 60)
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
        token = current_app.config['jwt'].generate_token({"user_id": dbreturn[0]['id'], "admin": 0})
        res = make_response(json.dumps({
            "status": "success",
            "cause": 100
        }))

        res.set_cookie("User_Token", token, expires=time.time() + 6 * 60)
        return res
    elif len(dbreturn) > 1:
        return jsonify({"status": "fail", "cause": 102})
    else:
        return jsonify({"status": "fail", "cause": 101})

@app.route("/GetUserDetail", methods=["POST"])
def get_user_detail():
    if request.cookies.get('User_Token') is None: return "", 401
    if not current_app.config['jwt'].check_token_valid(request.cookies.get('User_Token')):
        return "", 401
    user_info = current_app.config['jwt'].get_token_detail(request.cookies.get('User_Token'))
    db = database_utils(current_app.config['config'])
    dbreturn = db.command_excute("""
                                SELECT *
                                FROM accounts
                                WHERE accounts.id = %(user_id)s
                                """, user_info)

    if len(dbreturn) == 0:
        return jsonify({"status": "failed", "cause": 202})

    res = dbreturn[0]
    res["status"] = "success"
    res["cause"] = 200

    return jsonify(res)

@app.route("/ChangePassword", methods=["POST"])
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
        return jsonify({"status": "failed", "cause": 203})

    db = database_utils(current_app.config['config'])
    dbreturn = db.command_excute("""
                                SELECT *
                                FROM accounts
                                WHERE accounts.id = %(user_id)s
                                """, {"user_id": user_info["user_id"]})
    if dbreturn == 0:
        return jsonify({"status": "failed", "cause": 204})

    db.command_excute("""
    UPDATE accounts
    SET password = %(new_password)s
    WHERE accounts.id = %(user_id)s
    """, {"user_id": user_info["user_id"], "new_password": new_password})

    return jsonify({"status": "success", "cause": 200})

@app.route("/ChangeProfile", methods=["POST"])
def change_profile():
    token = request.cookies.get("User_Token")
    if token is None: return "", 301
    if not current_app.config['jwt'].check_token_valid(token):
        return "", 301

    user_info = current_app.config['jwt'].get_token_detail(token)
    #request不能給我這些東西
    not_require_key = ["account_id", "password", "id"]
    request_json: dict = request.json
    for key in not_require_key:
        if key in request_json.keys():
            return "", 301

    db = database_utils(current_app.config['config'])
    dbreturn = db.command_excute("""
                                    SELECT *
                                    FROM accounts
                                    WHERE accounts.id = %(user_id)s
                                    """, {"user_id": user_info["user_id"]})
    if dbreturn == 0:
        return jsonify({"status": "failed", "cause": 302})
    require_key = ["name", "email", "phone"]
    request_json: dict = request.json
    for key in require_key:
        if key in request_json.keys():
            user_info[key] = request.json[key]

    db.command_excute("""
        UPDATE accounts
        SET name = %(name)s, %(email)s, %(phone)s
        WHERE accounts.id = %(user_id)s
        """, user_info)

    return jsonify({"status": "success", "cause": 300})

@app.route("register_shop", methods=['POST'])
def register_shop():
    db = database_utils(current_app.config['config'])
    require_field = ["owner_id", "name", "avgstar", "intro", "last_login"]
    for need in require_field:
        if need not in request.json.keys():
            return jsonify({"status": "failed", "cause": 201})
    check_account = db.command_excute("""
                                SELECT *
                                FROM accounts
                                WHERE accounts.id = %(owner_id)s
                                """, request.json)
    check_shop = db.command_excute("""
                                    SELECT *
                                    FROM shop
                                    WHERE owner_id = %(owner_id)s
                                    """, request.json)
    # 無account或已有商店
    if len(check_account) != 1 or len(check_shop) != 0:
        return jsonify({
            'status': "failed",
            'cause': 202
        })
    # 如果有附logo
    shopInfo = request.json
    if "logo" not in request.json.keys():
        shopInfo["logo"] = 1
    db.command_excute("""
                    INSERT INTO publisher 
                    VALUES(publisher_id)
                    """, {})
    shopInfo['publisher_id'] = db.command_excute("""SELECT LAST_INSERT_ID() AS id;""", {})[0]['id']
    db.command_excute("""
                       INSERT INTO shop(owner_id, name, avgstar, intro, last_login, logo, publisher_id) 
                       VALUES (%(owner_id)s, %(name)s, %(avgstar)s, %(intro)s, %(last_login)s, %(logo)s, %(publisher_id)s)
                       """, shopInfo)

    return jsonify({
        'status': "success",
        'cause': 200
    })



# iJx5e0gQ9NkgVExZYV1Afke6Jf2VhXmp3HA0SvJbZr/UwMuJWh3uSEW44MuYhpyBOSTxoe/EfKE/Ie+z8i9lNchPUuBWrNLlZzQ+ddmA0ldTrzBp1QH9v6Z44I/mJ0KhtvEJF3DDp/jdRQbcLe3S9pnGPOqpAuXm87bj0chjYVsS23IOX+9TuPANfvwDWe6lB74tve9v+xhgys3d7wm8gZj5nOTnDcrSi4em8P4ZKdYH3gFmW/d8Vgqzj72xMX7eIgJrzY0MTpSlWH++xhVzuDm9rw/UVH0BSaLpZLYcCLQyPnfvtwMqCsrEXJvKJnFs45cWoJ3p8eMQaFqMf3vfGQ==
