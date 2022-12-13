from flask import Flask, render_template, request, redirect, url_for, Blueprint, jsonify, current_app, make_response
from module.configs import configure_collection
import time
import json
from module.data_utils import database_utils
from module.jwt_token_utils import json_web_token_generator


app = Blueprint('account_manage', __name__)


@app.route("/check_duplicate", methods=['POST'])
def check_duplicate():
    # connect database
    db = database_utils(current_app.config['config'])
    dbreturn = db.command_excute("""
        SELECT 
            * 
        FROM 
            accounts 
        WHERE 
            email = %(email)s 
        """, request.json
    )
    # success or fail return
    if len(dbreturn) != 0:
        return jsonify({
            'status': "failed",
            'cause': 501
        })
    else:
        return jsonify({
            'status': "success",
            'cause': 500
        })


@app.route("/register", methods=['POST'])
def register():
    return "ho zero"

@app.route("login", methods=['POSt'])
def login():
    auth_info = request.json
    auth_info['password'] = current_app.config['crypto'].decrypt(auth_info['password'])
    db = database_utils(current_app.config['config'])
    dbreturn = db.command_excute("""
            SELECT 
                * 
            FROM 
                accounts 
            WHERE 
                email = %(email)s AND password = %(password)s
            """, request.json )

    if len(dbreturn) == 1:
        jwt_generator = json_web_token_generator(current_app.config['config'])
        token = jwt_generator.generate_token({"userId": dbreturn[0]['id']})
        res = make_response(json.dumps({
            "status": "success",
            "cause": 0
        }))

        res.set_cookie("Token", token, expires=time.time()+6*60)
        return res
    elif len(dbreturn) > 1:
        return jsonify({"status": "fail", "cause": 2})
    else:
        return jsonify({"status": "fail", "cause": 1})

# iJx5e0gQ9NkgVExZYV1Afke6Jf2VhXmp3HA0SvJbZr/UwMuJWh3uSEW44MuYhpyBOSTxoe/EfKE/Ie+z8i9lNchPUuBWrNLlZzQ+ddmA0ldTrzBp1QH9v6Z44I/mJ0KhtvEJF3DDp/jdRQbcLe3S9pnGPOqpAuXm87bj0chjYVsS23IOX+9TuPANfvwDWe6lB74tve9v+xhgys3d7wm8gZj5nOTnDcrSi4em8P4ZKdYH3gFmW/d8Vgqzj72xMX7eIgJrzY0MTpSlWH++xhVzuDm9rw/UVH0BSaLpZLYcCLQyPnfvtwMqCsrEXJvKJnFs45cWoJ3p8eMQaFqMf3vfGQ==