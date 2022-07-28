from django.db import models

# Create your models here.

class Comment(models.Model):
    content= models.TextField()
    user_id= models.ForeignKey(User, on_delete=models.CASCADE)
    package_id= models.ForeignKey(Package, on_delete=models.CASCADE)
    created_date= models.DateTimeField(auto_now_add=True)
    updated_date= models.DateTimeField(auto_now=True)


