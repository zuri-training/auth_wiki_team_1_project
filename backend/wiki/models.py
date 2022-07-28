from django.db import models

# Create your models here.
class CodeTitle(models.Model):
    name = models.CharField(max_length=100)


class CodeSample(models.Model):
    id = models.AutoField(
        auto_created=True, primary_key=True, serialize=False, verbose_name="ID"
    )
    content = models.TextField()
    created_date = models.DateTimeField(auto_now_add=True)
    update_date = models.DateTimeField(auto_now=True)
    categories = models.ManyToManyField("CodeTitle", related_name="CodeSample")
    # package =
    user = models.ForeignKey(CodeTitle, on_delete=models.CASCADE)
