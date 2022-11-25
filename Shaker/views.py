from django.shortcuts import render

# Create your views here.
def get_index_page(request):
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
    return render(request, "main.html", setting)

def get_login_page(request):
    setting = {
        "title": "登入",
        "script": [
            "js/login.js"
        ],
        "css": [
            "css/output.css",
            "css/login.css",
        ]
    }
    return render(request, "main.html", setting)

def get_register_page(request):
    setting = {
        "title": "註冊",
        "script": [
            "js/register.js"
        ],
        "css": [
            "css/output.css",
            "css/register.css",
        ]
    }
    return render(request, "main.html", setting)