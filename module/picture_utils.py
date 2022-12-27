import base64
from flask import Flask, render_template, request, redirect, url_for, Blueprint, jsonify, current_app, make_response
from module.configs import configure_collection
import time
import json
import os
import uuid
from module.data_utils import database_utils


def get_new_pic(data: str) -> int:
    """
        將傳入的圖片資料解碼並寫入資料庫中
        return:
            新圖片在資料庫中的id
            -1 : 代表圖片格式不符合規則
    """
    rawdata = data.split(',')
    # 找出檔名
    s = False
    file_type = ''
    for i in rawdata[0]:
        if i == ';':
            break
        if s:
            file_type += i
        if i == '/':
            s = True
    print(file_type)

    if file_type not in ['jpg', 'png', 'jpeg']:
        return -1

    img_data = base64.b64decode(rawdata[1])

    # 賦予檔案名稱
    filename = str(uuid.uuid4()) + "." + file_type
    while (os.path.exists((current_app.config["config"]["UploadFolder"] + "/" + filename))):
        filename = str(uuid.uuid4()) + "." + file_type

    print(filename)

    # 將檔案寫入實體資料夾
    with open(current_app.config["config"]["UploadFolder"] +     filename, 'wb') as f:
        f.write(img_data)
        f.close()

    # 將檔案資訊寫入資料庫
    db = database_utils(current_app.config['config'])
    db.command_excute(
        """
            INSERT INTO picture (file_path) 
            VALUES (%(file_path)s);
        """,
        {"file_path": (current_app.config["config"]["UploadFolder"] + filename)}
    )

    dbreturn = db.command_excute("""
                    SELECT 
                        id
                    FROM 
                        picture 
                    WHERE 
                        file_path = (%(file_path)s)
                    """, {"file_path": (current_app.config["config"]["UploadFolder"] + filename)})
    return dbreturn[0]['id']












