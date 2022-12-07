from flask import Flask, render_template, request, redirect, url_for, Blueprint,jsonify
import MySQLdb

app = Blueprint('account_manage', __name__)

@app.route("/check_duplicate", methods=['POST'])
def check_duplicate(request):
    # connect database
    db = MySQLdb.connect(host="localhost", user="root", passwd="peter0830", db="shaker", charset="utf8")
    cursor = db.cursor()
    cursor.execute("""
        SELECT 
            * 
        FROM 
            account 
        WHERE 
            email = %(email)s 
        """, {
            'email': request.json['email']
        })

    # success or fail return
    if cursor.fetchone() == None:
        return jsonify({
            'status': "success",
            'cause': 500
        })
    else:
        return jsonify({
            'status': "failed",
            'cause': 501
        })

@app.route("/register", methods=['POST'])
def register(request):
    return "ho zero"
