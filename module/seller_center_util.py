from flask import Flask, render_template, request, redirect, url_for, Blueprint, jsonify, current_app, make_response
from module.configs import configure_collection
import time
import json
import os
import uuid
from module.data_utils import database_utils


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
        pass
    else:
        return shop_ids[0]['id']





