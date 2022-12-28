from flask import Flask, render_template, request, redirect, url_for, Blueprint, jsonify, current_app, make_response
from module.configs import configure_collection
import time
import json
import os
import uuid
from datetime import datetime, timedelta
from module.data_utils import database_utils
app = Blueprint('coupon_manager', __name__)

@app.route("/PublishFreeCarCoupon", methods=['POST'])
def publish_coupon_admin():
    token = request.cookies.get("User_Token")
    if token is None: return "", 401
    if not current_app.config['jwt'].check_token_valid(token, True):
        return "", 401
    admin_info = current_app.config['jwt'].get_token_detail(token)
    require_field = ['name', 'minimum_consumption', 'discount', 'discount_type']
    for need in require_field:
        if need not in request.json.keys():
            return jsonify({"cause": 2001})
    db = database_utils(current_app.config['config'])
    publisher_id = db.command_excute("""
                                                 SELECT
                                                     publisher_id
                                                 FROM
                                                     admin
                                                 WHERE
                                                     id = %(admin_id)s
                                                 """, admin_info)
    if len(publisher_id) != 1:
        return jsonify({
            "cause": 2002
        })
    info = request.json
    info["publisher_id"] = publisher_id[0]["publisher_id"]
    info["type"] = 0
    info["start_time"] = datetime.now().strftime("%Y/%m/%d %H:%M:%S")
    info["end_time"] = (datetime.now() + timedelta(days=7)).strftime("%Y/%m/%d %H:%M:%S")
    info["discount"] = 0
    db.command_excute("""
                                       INSERT INTO `coupon_type` ( minimum_consumption, discount, discount_type)
                                       VALUES (%(minimum_consumption)s, %(discount)s, %(type)s)
                                       """, info)
    info['id'] = db.command_excute("""SELECT LAST_INSERT_ID() AS id;""", {})[0]['id']
    db.command_excute("""
                               INSERT INTO `coupon` (publisher_id, name, type, start_time, end_time)
                               VALUES (%(publisher_id)s, %(name)s, %(id)s, %(start_time)s,%(end_time)s)
                               """, info)
    return jsonify(
        {"cause": 0}
    )

@app.route("/PublishShopCoupon", methods=['POST'])
def publish_coupon_shop():
    token = request.cookies.get("User_Token")
    if token is None: return "", 401
    if not current_app.config['jwt'].check_token_valid(token):
        return "", 401
    user_info = current_app.config['jwt'].get_token_detail(token)
    db = database_utils(current_app.config['config'])
    shop_id = db.command_excute("""
                                                    SELECT
                                                        id, publisher_id
                                                    FROM
                                                        shop
                                                    WHERE
                                                        owner_id = %(user_id)s
                                                    """, user_info)
    if len(shop_id) != 1:
        return jsonify({
                "casue": 2201
            })
    require_field = ['name', 'minimum_consumption', 'discount', 'discount_type']
    for need in require_field:
        if need not in request.json.keys():
            return jsonify({"cause": 2202})
    info = request.json
    info["shop_id"] = shop_id[0]["id"]
    info["publisher_id"] = shop_id[0]["publisher_id"]
    info["start_time"] = datetime.now().strftime("%Y/%m/%d %H:%M:%S")
    info["end_time"] = (datetime.now() + timedelta(days=7)).strftime("%Y/%m/%d %H:%M:%S")
    db.command_excute("""
                                          INSERT INTO `coupon_type` ( minimum_consumption, discount, discount_type)
                                          VALUES (%(minimum_consumption)s, %(discount)s, %(discount_type)s)
                                          """, info)
    info['id'] = db.command_excute("""SELECT LAST_INSERT_ID() AS id;""", {})[0]['id']
    db.command_excute("""
                                  INSERT INTO `coupon` (publisher_id, name, type, shop_id, start_time, end_time)
                                  VALUES (%(publisher_id)s, %(name)s, %(id)s, %(shop_id)s, %(start_time)s,%(end_time)s)
                                  """, info)
    return jsonify(
        {"cause": 0}
    )
@app.route("/GetCoupons", methods=['POST'])
def get_coupon():
    token = request.cookies.get("User_Token")
    if token is None: return "", 401
    if not current_app.config['jwt'].check_token_valid(token):
        return "", 401
    user_info = current_app.config['jwt'].get_token_detail(token)
    require_field = ['shop_id']
    for need in require_field:
        if need not in request.json.keys():
            return jsonify({"cause": 2301})
    db = database_utils(current_app.config['config'])
    coupons = db.command_excute("""
                                                    SELECT
                                                            *
                                                    FROM
                                                            coupon
                                                    JOIN coupon_type ON coupon.type = coupon_type.id
                                                    WHERE
                                                    shop_id = %(shop_id)s OR shop_id is NULL
                                                    """, request.json)
    if len(coupons) <= 0:
        return jsonify({
            "no coupon": 1
        })

    return jsonify(coupons)