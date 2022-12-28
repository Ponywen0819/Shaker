import json
import time
import hashlib
from flask import Flask, render_template, request, redirect, url_for, Blueprint, jsonify, current_app, make_response
from module.data_utils import database_utils

app = Blueprint('admin_manage', __name__)


@app.route("/Login", methods=['POST'])
def login():
    auth_info = request.json
    auth_info['password'] = hashlib.sha256(
        current_app.config['crypto'].decrypt(auth_info['password']).encode("utf-8")).hexdigest()
    db = database_utils(current_app.config['config'])
    dbreturn = db.command_excute("""
    SELECT *
    FROM admin
    WHERE account = %(account)s AND password = %(password)s
    """, auth_info)

    if len(dbreturn) == 1:
        token = current_app.config['jwt'].generate_token({"admin_id": dbreturn[0]['id'], "admin": 1})
        res = make_response(json.dumps({"cause": 0}))

        res.set_cookie("User_Token", token, expires=time.time() + 6 * 60*60)
        return res
    elif len(dbreturn) > 1:
        return jsonify({"cause": 102})
    else:
        return jsonify({"cause": 101})


@app.route("/CreateAdmin", methods=['POST'])
def register():
    jwt_generator = current_app.config['jwt']
    if not jwt_generator.check_token_valid(request.cookies.get('User_Token'), True):
        return "", 401

    require_field = ["name", "account", "password"]
    for need in require_field:
        if need not in request.json.keys():
            return jsonify({"cause": 153})

    auth_info = request.json
    auth_info['password'] = hashlib.sha256(
        current_app.config['crypto'].decrypt(request.json['password']).encode("utf-8")).hexdigest()

    db = database_utils(current_app.config['config'])
    db.command_excute("""
                INSERT INTO publisher (publisher_id)
                VALUES (%(id)s);
                """, {"id": 0})
    auth_info['publisher_id'] = db.command_excute("""SELECT LAST_INSERT_ID() AS id;""", {})[0]['id']
    db.command_excute_and_return_id("""
                    INSERT INTO admin (name, account, password, publisher_id)
                    VALUES (%(name)s, %(account)s, %(password)s, %(publisher_id)s);
                    """, auth_info)

    return jsonify({"cause": 0})
