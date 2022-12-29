from flask import Flask, render_template, request, redirect, url_for, Blueprint, jsonify, current_app, make_response
from module.configs import configure_collection
import time
import json
import os
import uuid
from datetime import datetime
from module.data_utils import database_utils

def register_shop(user_id):
    db = database_utils(current_app.config['config'])

    db.command_excute("""
        INSERT INTO publisher 
        VALUES(publisher_id)
    """, {})

    user_info = db.command_excute('''
        SELECT id,name,photo
        FROM accounts
        WHERE id = %(user_id)s
    ''',{
        'user_id': user_id
    })[0]

    publisher_id = db.command_excute("""SELECT LAST_INSERT_ID() AS id;""", {})[0]['id']
    db.command_excute("""
        INSERT INTO shop(owner_id, name, avgstar, intro, last_login, logo, publisher_id) 
        VALUES (%(owner_id)s, %(name)s, 5, %(intro)s, %(time)s, %(logo)s, %(publisher_id)s)
    """, {
        'owner_id': user_info['id'],
        'name': user_info['name'],
        'intro': '',
        'time': datetime.now().strftime("%Y/%m/%d %H:%M:%S"),
        'logo': user_info['photo'],
        'publisher_id': publisher_id
    })

    return 0

def get_shop_id(user_id):
    db = database_utils(current_app.config['config'])
    shop_ids = db.command_excute('''
        SELECT id
        FROM shop
        WHERE owner_id = %(user_id)s
    ''', {'user_id': user_id})

    return_num = len(shop_ids)
    # 回傳數量如大於一條則是資料庫錯誤
    if return_num > 1:
        return -1
    # 回傳數量如等於0則是不存在
    elif return_num == 0:
        return register_shop(user_id)
    else:
        return shop_ids[0]['id']
