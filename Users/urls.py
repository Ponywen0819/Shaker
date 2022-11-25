from django.urls import path
from . import views

urlpatterns = [
    path('profile', views.get_profile_page)
]
