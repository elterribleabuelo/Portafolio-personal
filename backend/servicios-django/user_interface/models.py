from django.db import models
from django.contrib.auth.models import AbstractUser
import re
# Create your models here.

# Creating 1 to 5 level choice
Rating_range = [
    ('1','1'),
    ('2','2'),
    ('3','3'),
    ('4','4'),
    ('5','5')
]

class User(AbstractUser):
    pass

class InformationModel(models.Model):
    # Una informacion solo es de un usuario y un usuario puede tener varias informaciones
    user = models.ForeignKey(User,on_delete=models.CASCADE) # Cuando se elimine el usuario se eliminan todas las informaciones
    fullname = models.CharField(max_length=50, blank=True, null = True)
    bio = models.CharField(max_length=500,blank = True, null = True)
    about = models.TextField(blank = True, null = True)
    address = models.CharField(max_length=100,blank = True,null = True)
    email = models.EmailField(max_length=100, blank=True, null = True)
    phone = models.CharField(max_length=15, blank=True)
    avatar = models.ImageField(upload_to = "avatar/", blank = True, null = True)
    CV = models.FileField(upload_to = "cv/",blank = True, null = True)
    
    # Redes sociales
    github = models.URLField(blank = True, null = True)
    facebook = models.URLField(blank = True, null = True)
    instagram = models.URLField(blank = True, null = True)
    linkedin = models.URLField(blank = True, null = True)
    other = models.URLField(blank = True, null = True)
    
    def __str__(self):
        return self.fullname

class EducationModel(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    title = models.CharField(max_length=50,blank = True, null = True)
    the_year = models.CharField(max_length=50, blank = True, null = True)
    institute = models.CharField(max_length=200,blank = True,null = True)
    description = models.TextField(blank=True,null = True)
    
    class Meta:
        ordering = ['-the_year']
        
    def __str__(self):
        return f"{self.user} => {self.title} from {self.institute}"


class ExperienceModel(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    title = models.CharField(max_length=50,blank = True, null = True)
    the_year = models.CharField(max_length=50, blank = True, null = True)
    institute = models.CharField(max_length=200,blank = True,null = True)
    description = models.TextField(blank=True,null = True)
    
    class Meta:
        ordering = ['-the_year']
        
    def __str__(self):
        return f"{self.user} => {self.title} from {self.institute}"

class SkillsetModel(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    title = models.CharField(max_length=50,blank = True, null = True)
    imagelink = models.URLField(blank = True, null = True)
    description = models.TextField(blank=True,null = True)
    skillrank = models.CharField(choices = Rating_range, default = 2, max_length = 10)
    
    class Meta:
        ordering = ['-skillrank']
        
    def __str__(self):
        return f"{self.user} => {self.title}"

class ProjectModel(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    title = models.CharField(max_length=50,blank = True, null = True)
    slug = models.SlugField(max_length = 200, blank = True, null = True, unique = True)
    imagelink = models.URLField(blank = True, null = True)
    description = models.TextField(blank=True,null = True)
    projectRating = models.CharField(choices = Rating_range, default = '2', max_length = 10)
    demo = models.URLField(blank=True,null = True)
    github = models.URLField(blank=True,null = True)
    
    class Meta:
        ordering = ['-projectRating']
        
    def __str__(self):
        return f"{self.user} => {self.title}"
    
    def get_project_absolute_url(self):
        return "/projects/{}".format(self.slug)
    
    def save(self,*args,**kwargs):
        self.slug = self.slug_generate()
        super(ProjectModel,self).save(*args, **kwargs)
        # https://j2logo.com/args-y-kwargs-en-python/
    
    def slug_generate(self):
        slug = self.title.strip()
        slug = re.sub("","",slug)
        return slug.lower() 
    

class MessageModel(models.Model):
    user = models.ForeignKey(User,on_delete = models.CASCADE)
    name = models.CharField(max_length = 100, blank = False, null = True)
    email = models.EmailField(max_length = 200, blank = False, null = True)
    message = models.TextField(blank = False, null = True)
    subject = models.CharField(max_length = 1000, blank = False, null = False)
    send_time = models.DateTimeField(auto_now_add = True)
    is_read = models.BooleanField(default = False)
    
    
    class Meta:
        ordering = ['-send_time']
        
    def __str__(self):
        return f"{self.user} => {self.subject}"


    
        
    