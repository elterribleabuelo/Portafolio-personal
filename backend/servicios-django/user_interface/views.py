from django.contrib.auth import authenticate,login,logout
from django.db import IntegrityError
from django.shortcuts import render,redirect
from django.http import HttpResponse,Http404, HttpResponseRedirect,JsonResponse
from .models import (User,InformationModel,EducationModel,ExperienceModel,SkillsetModel,ProjectModel,MessageModel)
from .forms import (IntroForm,EducationForm,ExperienceForm,ProjectForm,SkillsetForm)
from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt,ensure_csrf_cookie,csrf_protect
import json

# Create your views here.

def index(request):
    response = {
        "message":"Hola index"
    }
    return JsonResponse(response)
    #return render(request,template_name = "user_interface/index.html")
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

@csrf_exempt
def register_view(request, *args, **kwargs):
    
    if request.method == 'POST':
        data = json.loads(request.body)
        
        username = data.get("username")
        email = data.get("email")
        
        # Comparando las claves escritas
        password = data.get("password")
        confirmation = data.get("confirmation")
        
        if password != confirmation:
            response = {
                        "message":"Las contraseñas no coinciden.Intente de nuevo"
            }
            return JsonResponse(response)
            #return render(request, template_name = "user_interface/register.html",context = {"message":"Las contraseñas no coinciden.Intente de nuevo"})

        # Creando el nuevo usuario
        try:
            user = User.objects.create_user(username,email,password)
            user.save()
        except IntegrityError:
            response = {
                        "message":"El usuario ya existe"
            }
            return JsonResponse(response)
            #return render(request, template_name = "user_interface/register.html",context = {"message":"El usuario ya existe"})

        login(request,user)
        
        response = {
                        "message":"Usuario correctamente registrado"
            }
        
        return JsonResponse(response)
    
    else:
        response = {
                    "message":"Metodo no valido"
        }
        return JsonResponse(response)
        #return render(request, template_name = "user_interface/register.html")
            

def form_createView(request,*args,**kwargs):
    
    template_name = 'user_interface/create.html'
    
    # Creating a new instance of the IntroForm class.
    intro_form = IntroForm(request.POST or None)
    if intro_form.is_valid():
        intro_form.save()
    else:
        intro_form = IntroForm()
    
    # Creating a new instance of the EducationForm class.
    edu_form = EducationForm(request.POST or None)
    if edu_form.is_valid():
        edu_form.save()
    else:
        edu_form = IntroForm()
        
    # Creating a new instance of the ExperienceForm class.
    exp_form = ExperienceForm(request.POST or None)
    if exp_form.is_valid():
        # Saving the form to the database.
        exp_form.save()
    else:
        exp_form = ExperienceForm()
        
    # Creating a new instance of the ProjectForm class.
    project_form = ProjectForm(request.POST or None)
    if project_form.is_valid():
        project_form.save()
    else:
        project_form = ProjectForm()
    
    # Creating a new instance of the SkillsetForm class.
    skill_form = SkillsetForm(request.POST or None)
    if skill_form.is_valid():
        skill_form.save()
    else:
        skill_form = SkillsetForm()
        
    context = {
        'introFORM':intro_form,
        'eduFORM':edu_form,
        'expFORM':exp_form,
        'projFORM':project_form,
        'skillFORM':skill_form
    }
    
    return render(request, template_name, context)
    
    
    
    
        
        
        
    
    
    
