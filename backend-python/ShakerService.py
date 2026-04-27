from flask import Flask
from flask_cors import CORS
from flasgger import Swagger
from apps import account_manage
from apps import product_manage
from apps import admin_manage
from apps import coupon_manager
from module.jwt_token_utils import json_web_token_generator
from module.configs import configure_collection
from module.crypto_utils import crypto_utils

app = Flask(__name__)
CORS(app)
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

@app.route("/")
def index():
    return {"message": "Shaker API"}

if __name__ == "__main__":
    app.config['config'] = configure_collection()
    app.config['jwt'] = json_web_token_generator(app.config['config'])
    app.config['crypto'] = crypto_utils(app.config['config'])

    app.run(host="0.0.0.0", debug=True)
