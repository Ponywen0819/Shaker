from flask import Flask, render_template, make_response

# from .configs import config

app = Flask(__name__)


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
            "output.css",
            "Toolbar.css",
        ]
    }
    return render_template('main.html', setting=setting)


if __name__ == "__main__":
    app.run(debug=True)
