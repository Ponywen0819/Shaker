from flask import Flask, render_template, request, redirect, url_for, Blueprint
import MySQLdb

app = Blueprint('account_manage', __name__)

@app.route("/check_duplicate", methods=['POST'])
def check_duplicate(request):
    return "ho zero"

@app.route("/register", methods=['POST'])
def register(request):
    return "ho zero"
