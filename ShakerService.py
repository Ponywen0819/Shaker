from flask import Flask, render_template, make_response, Blueprint
from apps import account_manage
# from configs import config

app = Flask(__name__)
app.register_blueprint(account_manage.app, url_prefix='/account')
# app.config.from_object()

@app.route('/')
def index():
    setting = {
        "title": "這是首頁拉",
        "script": [
            "js/Toolbar.js",
            "js/index.js"
        ],
        "css": [
            "css/output.css",
            "css/Toolbar.css",
        ]
    }
    return render_template('templates/main.html', )

if __name__ == "__main__":
    app.run()