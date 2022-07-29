from django.db import models

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


    def __str__(self):
        return self.name
