from flask import Flask, render_template, make_response, Blueprint
from flasgger import Swagger
from apps import account_manage
from apps import product_manage
from apps import admin_manage
from apps import coupon_manager
from module.jwt_token_utils import json_web_token_generator
from module.configs import configure_collection
from module.crypto_utils import crypto_utils
from module.seller_center_util import get_shop_id

# from configs import config

# from .configs import config

app = Flask(__name__)
app.register_blueprint(account_manage.app, url_prefix='/account')
app.register_blueprint(product_manage.app, url_prefix='/product')
app.register_blueprint(coupon_manager.app, url_prefix='/coupon')
app.register_blueprint(admin_manage.app, url_prefix='/admin')

app.config['SWAGGER'] = {
        "title": "Shaker API",
        "description": "Shaker API",
        "version": "1.0.0",
        "termsOfService": "",
        "hide_top_bar": True
    }
Swagger(app)

# app.config.from_object()

@app.route('/')
@app.route('/index')
def get_index_page():
    setting = {
        "title": "這是首頁拉",
        "script": [
            "Toolbar.js",
            "notification.js",
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
            "notification.js",
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


@app.route('/product/<int:product_id>')
def get_product_page(product_id):
    setting = {
        "title": "商品",
        "script": [
            'Toolbar.js',
            "product.js"
        ],
        "css": [
            'Toolbar.css',
            "product.css",
        ]
    }
    return render_template('main.html', setting=setting)


@app.route('/search')
def get_search_page():
    setting = {
        "title": "搜尋",
        "script": [
            'Toolbar.js',
            "search.js"
        ],
        "css": [
            'Toolbar.css',
            "search.css",
            "index.css"
        ]
    }
    return render_template('main.html', setting=setting)


@app.route('/checkout')
def get_checkout_page():
    setting = {
        "title": "結帳",
        "script": [
            'Toolbar.js',
            "checkout.js"
        ],
        "css": [
            'Toolbar.css',
            "cart.css"
        ]
    }
    return render_template('main.html', setting=setting)


@app.route('/sellercenter/index')
def get_smc_page():
    setting = {
        "title": "賣家中心｜首頁",
        "script": [
            "SMindex.js",
            "seller_center.js",
            "sellerContent.js",
            
        ],
        "css": [
            "Nav.css",
            "Sidebar.css",
            'SMC.css',
            "SMindex.css"
        ]
    }
    return render_template('main.html', setting=setting)


@app.route('/sellercenter/finance')
def get_ms_page():
    setting = {
        "title": "賣家中心|金融中心",
        "script": [
            "msindex.js",
            "myselling.js",
            "seller_center.js",
        ],
        "css": [
            "Nav.css",
            "Sidebar.css",
            "myselling.css",
            "msindex.css"
        ]
    }
    return render_template('main.html', setting=setting)


@app.route('/sellercenter/shipping')
def get_shipping_page():
    setting = {
        "title": "賣家中心|貨運中心",
        "script": [
            "seller_center.js",
            "seller_shipping.js"
        ],
        "css": [
            "Nav.css",
            "Sidebar.css",
            'seller_shipping.css',
            "SMindex.css"
        ]
    }
    return render_template('main.html', setting=setting)


@app.route('/sellercenter/marketing')
def get_finance_page():
    setting = {
        "title": "賣家中心|優惠券管理",
        "script": [
            "seller_center.js",
            "finance.js",
        ],
        "css": [
            'coupon.css',
            "Sidebar.css",
            "Nav.css",
            'seller_shipping.css',
            "SMindex.css"
        ]
    }
    return render_template('main.html', setting=setting)


@app.route('/sellercenter/myproduct')
def get_my_product_page():
    setting = {
        "title": "賣家中心",
        "script": [
            "seller_center.js",
            "myproduct.js"
        ],
        "css": [
            "seller_shipping.js",
            "Nav.css",
            "Sidebar.css",
            'seller_shipping.css',
            "SMindex.css"
        ]
    }
    return render_template('main.html', setting=setting)


@app.route('/sellercenter/newproduct')
def get_new_product_page():
    setting = {
        "title": "賣家中心",
        "script": [
            "seller_center.js",
            "newproduct.js",
        ],
        "css": [
            "Sidebar.css",
            "Nav.css",
            'seller_shipping.css',
            "SMindex.css"
        ]
    }
    return render_template('main.html', setting=setting)


if __name__ == "__main__":
    app.config['config'] = configure_collection()
    app.config['jwt'] = json_web_token_generator(app.config['config'])
    app.config['crypto'] = crypto_utils(app.config['config'])

    app.run(host="0.0.0.0", debug=True)
