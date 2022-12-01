from django.urls import path
from . import views

urlpatterns = [
    path('account/profile', views.get_profile_page),
    path('account/password', views.get_password_page),
    path('purchase', views.get_purchase_page),
    path('coupon', views.get_coupon_page)
]
