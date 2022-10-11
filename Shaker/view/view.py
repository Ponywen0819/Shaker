from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return HttpResponse("test")

def getLoginPage(request):
    return render(request, "login.html")