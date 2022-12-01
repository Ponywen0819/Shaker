from django.shortcuts import render


# Create your views here.

def get_profile_page(request):
    setting = {
        "title": "個人中心",
        "css": [
            'css/Toolbar.css',
            'css/UserInfo.css',
            'css/profile.css'
        ],
        "script": [
            'js/Toolbar.js',
            'js/UserInfo.js',
            'js/profile.js'
        ]
    }
    return render(request, 'main.html', setting)

def get_password_page(request):
    setting = {
        "title": "個人中心",
        "css": [
            'css/Toolbar.css',
            'css/UserInfo.css',
            'css/profile.css'
        ],
        "script": [
            'js/Toolbar.js',
            'js/UserInfo.js',
            'js/profile.js'
        ]
    }
    return render(request, 'main.html', setting)

def get_purchase_page(request):
    setting = {
        "title": "個人中心",
        "css": [
            'css/Toolbar.css',
            'css/UserInfo.css'
        ],
        "script": [
            'js/Toolbar.js',
            'js/UserInfo.js',
            'js/profile.js'
        ]
    }
    return render(request, 'main.html', setting)


def get_coupon_page(request):
    setting = {
        "title": "個人中心",
        "css": [
            'css/Toolbar.css',
            'css/UserInfo.css'
        ],
        "script": [
            'js/Toolbar.js',
            'js/UserInfo.js',
            'js/profile.js'
        ]
    }
    return render(request, 'main.html', setting)
