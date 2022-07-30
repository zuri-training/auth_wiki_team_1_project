from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Comment(models.Model):
    content= models.TextField()
    user_id= models.ForeignKey(User, on_delete=models.CASCADE)
    package_id= models.ForeignKey(Package, on_delete=models.CASCADE)
    created_date= models.DateTimeField(auto_now_add=True)
    updated_date= models.DateTimeField(auto_now=True)

class File(models.Model):
    name = models.CharField(max_length=200)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    package_id = models.ForeignKey(Package, on_delete=models.CASCADE)
    download_counts = models.PositiveIntegerField(default=0)
    created_date = models.DateTimeField()
    updated_date = models.DateTimeField()
    
class Reaction(models.Model): 
    # Without the Post model, I had to use a # as placeholder for now.
    post_id = "#"
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    post_date = models.DateField(auto_now_add=True)
    likes = models.ManyToManyField(User, related_name='posts')


    def __str__(self):
        return self.name
