from flask import Flask, render_template, make_response, Blueprint
from apps import account_manage
# from configs import config

# from .configs import config

app = Flask(__name__)
app.register_blueprint(account_manage.app, url_prefix='/account')
# app.config.from_object()

@app.route('/')
def index():
    setting = {
        "title": "這是首頁拉",
        "script": [
            "Toolbar.js",
            "index.js"
        ],
        "css": [
            "Toolbar.css",
        ]
    }
    return render_template('main.html', setting=setting)

@app.route('/login')
def getLoginPage():
    setting = {
        "title": "登入",
        "script": [
            "login.js"
        ],
        "css": [
            "login.css",
        ]
    }
    return render_template('main.html', setting=setting)

@app.route('/register')
def getRegisterPage():
    setting = {
        "title": "登入",
        "script": [
            "register.js"
        ],
        "css": [
            "register.css",
        ]
    }
    return render_template('main.html', setting=setting)

if __name__ == "__main__":
    app.run(debug=True)
