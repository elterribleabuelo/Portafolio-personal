from django import forms
from django.db.models import fields
from django.forms import ModelForm
from .models import (User,InformationModel,EducationModel,ExperienceModel,SkillsetModel,ProjectModel,MessageModel)


class IntroForm(ModelForm):
    class Meta:
        model = InformationModel
        fields = '__all__'


class EducationForm(forms.ModelForm):
    class Meta:
        model = EducationModel
        fields = ["user","title","the_year","institute","description"]
        labels = {
            'title':"Level of education",
             'the_year':"Year",
             'institute':"Insititute"
        }
        
class ExperienceForm(forms.ModelForm):
    class Meta:
        model = ExperienceModel
        fields = ["user","title","the_year","institute","description"]
        labels = {
            'title':"Position",
             'the_year':"Year",
             'institute':"Company name"
        }

class ProjectForm(ModelForm):
    class Meta:
        model = ProjectModel
        fields = '__all__'

class SkillsetForm(ModelForm):
    class Meta:
        model = SkillsetModel
        fields = '__all__'

class MessageForm(ModelForm):
    class Meta:
        model = MessageModel
        fields = ['name','email','message','subject']

class ContactForm(forms.Form):
    name = forms.CharField(max_length = 50)
    email = forms.EmailField(max_length = 100)
    message = forms.CharField(widget = forms.Textarea, max_length = 2000)
    subject = forms.CharField(widget = forms.Textarea, max_length = 2000)
    

    