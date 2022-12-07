from flask import Flask, render_template, request, redirect, url_for, Blueprint,jsonify
import MySQLdb

app = Blueprint('account_manage', __name__)

@app.route("/check_duplicate", methods=['POST'])
def check_duplicate(request):
    # connect database
    db = MySQLdb.connect(host="localhost", user="root", passwd="", db="shaker", charset="utf8")
    cursor = db.cursor()
    cursor.excute("SELECT account FROM account WHERE email = %s" %request.json['email'])

    # sucess or fail
    result = {}
    if(cursor.fetchone() == None):
        result = {
            'status': "success",
            'cause': 500
        }
    else:
        result = {
            'status': "fail",
            'cause': 501
        }

    # return result
    return jsonify(result)

@app.route("/register", methods=['POST'])
def register(request):
    return "ho zero"
