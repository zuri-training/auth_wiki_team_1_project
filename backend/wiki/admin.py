from django.contrib import admin

# Register your models here.
from .models import Post, Reaction, File, Comment

admin.site.register(Comment)
admin.site.register(File)
admin.site.register(Reaction)
admin.site.register(Post)
