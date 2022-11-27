from django.urls import path
from . import views

urlpatterns = [
    path('profile', views.get_profile_page),
    path('purchase', views.get_purchase_page),
    path('coupon', views.get_coupon_page)
]
