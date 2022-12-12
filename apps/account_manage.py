from flask import Flask, render_template, request, redirect, url_for, Blueprint, jsonify, current_app
from module.configs import configure_collection
from module.data_utils import database_utils

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
        """, {
        'email': request.json['email']
    })
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
