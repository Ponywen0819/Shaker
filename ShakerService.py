from flask import Flask, render_template, make_response, Blueprint
from apps import account_manage
from module.configs import configure_collection

# from configs import config

# from .configs import config

app = Flask(__name__)
app.register_blueprint(account_manage.app, url_prefix='/account')



# app.config.from_object()

@app.route('/')
def get_index_page():
    setting = {
        "title": "這是首頁拉",
        "script": [
            "Toolbar.js",
            "index.js"
        ],
        "css": [
            "Toolbar.css",
            'index.css'
        ]
    }
    return render_template('main.html', setting=setting)


@app.route('/login')
def get_login_page():
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
def get_register_page():
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

@app.route('/user/account/profile')
def get_profile_page():
    setting = {
        "title": "修改個人資訊",
        "script": [
            'Toolbar.js',
            'UserInfo.js',
            "profile.js"
        ],
        "css": [
            'Toolbar.css',
            'UserInfo.css',
            "profile.css",
        ]
    }
    return render_template('main.html', setting=setting)

@app.route('/user/account/password')
def get_password_page():
    setting = {
        "title": "修改密碼",
        "script": [
            'Toolbar.js',
            'UserInfo.js',
            "password.js"
        ],
        "css": [
            'Toolbar.css',
            'UserInfo.css',
            "password.css",
        ]
    }
    return render_template('main.html', setting=setting)

@app.route('/user/purchase')
def get_purchase_page():
    setting = {
        "title": "登入",
        "script": [
            'Toolbar.js',
            'UserInfo.js',
            "purchase.js"
        ],
        "css": [
            'Toolbar.css',
            'UserInfo.css',
            "purchase.css",
        ]
    }
    return render_template('main.html', setting=setting)

@app.route('/user/coupon')
def get_coupon_page():
    setting = {
        "title": "登入",
        "script": [
            'Toolbar.js',
            'UserInfo.js',
            "coupon.js"
        ],
        "css": [
            'Toolbar.css',
            'UserInfo.css',
            "coupon.css",
        ]
    }
    return render_template('main.html', setting=setting)

@app.route('/cart')
def get_cart_page():
    setting = {
        "title": "購物車",
        "script": [
            'Toolbar.js',
            "cart.js"
        ],
        "css": [
            'Toolbar.css',
            "cart.css",
        ]
    }
    return render_template('main.html', setting=setting)

if __name__ == "__main__":
    app.config['config'] = configure_collection()
    app.run(debug=True)
