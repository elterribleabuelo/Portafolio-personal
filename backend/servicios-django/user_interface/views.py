from audioop import reverse
from msilib import sequence
from django.contrib.auth import authenticate,login,logout
from django.db import IntegrityError
from django.shortcuts import render,redirect
from django.http import HttpResponse,Http404, HttpResponseRedirect,JsonResponse
from .models import (User,InformationModel,EducationModel,ExperienceModel,SkillsetModel,ProjectModel,MessageModel)

# Create your views here.

def index(request):
    return render(request,template_name = "user_interface/index.html")
    #return HttpResponse("Hello, world. You're at the polls index.")


def login_view(request, *args,**kwargs):
    if request.method == 'POST':
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username,password)

        # Verificamos si la autenticacion es exitosa
        if user is not None:
            login(request,user)
            return HttpResponseRedirect(reverse("index"))
        else:
            return render(request, template_name = "user_interface/login.html",context = {"message":"Usuario o password inválidos.Porfavor introduzca sus credenciales de nuevo"})
    else:
        return render(request, template_name = "user_interface/login.html",context = {"message":""})

def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("index"))


def register_view(request, *args, **kwargs):
    if request.method == 'POST':
        username = request.POST["username"]
        email = request.POST["email"]
        
        # Comparando las claves escritas
        password = request.POST["password"]
        confirmation = request.POST["confirmation"]
        
        if password != confirmation:
            return render(request, template_name = "user_interface/register.html",context = {"message":"Las contraseñas no coinciden.Intente de nuevo"})

        # Creando el nuevo usuario
        try:
            user = User.objects.create_user(username,email,password)
            user.save()
        except IntegrityError:
            return render(request, template_name = "user_interface/register.html",context = {"message":"El usuario ya existe"})

        login(request,user)
        
        return HttpResponseRedirect(reverse("index"))
    
    else:
        return render(request, template_name = "user_interface/register.html")
        
        
    
    
