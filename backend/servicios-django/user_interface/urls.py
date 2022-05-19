from django.urls import path
from . import views

urlpatterns = [
    path('api-django/', views.index, name='index'),
    path('api-django/login',views.login_view, name = 'login'),
    path('api-django/logout',views.login_view, name = 'logout'),
    path('api-django/register-user',views.register_view, name = 'register'),
    path('api-django/create', views.form_createView, name = 'create')
    
]

