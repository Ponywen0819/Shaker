from django.shortcuts import render


# Create your views here.

def get_profile_page(request):
    setting = {
        "title": "個人中心",
        "css": [

        ],
        "script": [

        ]
    }

    return render(request, 'main.html', setting)
