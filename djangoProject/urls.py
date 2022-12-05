"""djangoProject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from shaker import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'Accounts', views.AccountsViewSet)

urlpatterns = [
    path('', views.get_index_page),
    path('index', views.get_index_page),
    path('login', views.get_login_page),
    path('register', views.get_register_page),
    path('user/', include('Users.urls')),
    path(r'api/', include(router.urls))
]
