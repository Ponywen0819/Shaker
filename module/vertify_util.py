from flask import Flask, render_template, request, redirect, url_for, Blueprint, jsonify, current_app, make_response
from module.configs import configure_collection
import time
import json
import os
import uuid
from datetime import datetime
from module.data_utils import database_utils

def vertigy_user(token):
    # token = request.cookies.get("User_Token")
    if token is None:
        return -1
    if not current_app.config['jwt'].check_token_valid(token):
        return -1
    user_info = current_app.config['jwt'].get_token_detail(token)
    db = database_utils(current_app.config['config'])
    dbreturn = db.command_excute("""
        SELECT *
        FROM accounts
        LEFT JOIN picture ON accounts.photo = picture.id
        WHERE accounts.id = %(user_id)s
    """, user_info)

    if len(user_info) == 0:
        return -1