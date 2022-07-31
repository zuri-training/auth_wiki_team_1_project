from django.urls import path, include
from .models import Comment
from rest_framework import routers, serializers

# Serializers define the API representation.


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = "__all__"
