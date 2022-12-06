from flask import Flask,render_template,request,redirect,url_for,blueprint
import MySQLdb
app = blueprint()
@app.route("/check_duplicate", methods=['POST'])
def check_duplicate():
    return 0
@app.route("/register", methods=['POST'])
def register():
    return 0