from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Post(models.Model):
    # fields
    title = models.CharField(max_length=200)
    description = models.TextField()
    documentation = models.TextField()
    code_sample = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField()

    # relationships
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    # methods
    def __str__(self):
        return self.title


class Comment(models.Model):
    # fields
    content = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)
    active = models.BooleanField(default=True)

    # relationships
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)

    # methods
    def __str__(self):
        return self.content


class File(models.Model):
    # fields
    name = models.CharField(max_length=200)
    download_counts = models.PositiveIntegerField(default=0)
    created_date = models.DateTimeField()
    updated_date = models.DateTimeField()
    
class Reaction(models.Model): 
    content = models.TextField()
    post_id = models.ForeignKey(Post, on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)

    # relationships
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)

    # methods
    def __str__(self):
        return self.name
