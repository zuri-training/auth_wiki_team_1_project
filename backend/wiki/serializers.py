from django.urls import path, include
from .models import Comment
from rest_framework import routers, serializers
from rest_framework import serializers
from .models import Post, Comment, File


# Serializers define the API representation.

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = "__all__"

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = "__all__"

class FileSerializer(serializers.ModelSerializer):  
    class Meta:
        model = File
        fields = '__all__'
        
class ReactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = File