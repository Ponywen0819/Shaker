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

app = Flask(__name__,static_folder='static', static_url_path="/static", template_folder='static')
app.register_blueprint(account_manage.app, url_prefix='/api/account')
app.register_blueprint(product_manage.app, url_prefix='/api/product')
app.register_blueprint(coupon_manager.app, url_prefix='/api/coupon')
app.register_blueprint(admin_manage.app, url_prefix='/api/admin')

app.config['SWAGGER'] = {
        "title": "Shaker API",
        "description": "Shaker API",
        "version": "1.0.0",
        "termsOfService": "",
        "hide_top_bar": True
    }
Swagger(app)

# app.config.from_object()

@app.route('/', defaults={'path': ''})
@app.route("/<path:path>")
def get_html(path):
    return app.send_static_file("main.html")

if __name__ == "__main__":
    app.config['config'] = configure_collection()
    app.config['jwt'] = json_web_token_generator(app.config['config'])
    app.config['crypto'] = crypto_utils(app.config['config'])

    app.run(host="0.0.0.0", debug=True)
