from django.shortcuts import render
from django.urls import reverse_lazy
from wiki.models import Post
from django.views import generic
from rest_framework import generics
from .models import Comment
from .serializers import CommentSerializer

# Create your views here.


class PostListView(generic.ListView):
    model = Post


class PostCreateView(generic.CreateView):
    model = Post
    fields: "__all__"
    success_url: reverse_lazy("wiki:all")


class PostDetailView(generic.DetailView):
    model = Post


class PostUpdateView(generic.UpdateView):
    model = Post
    fields: "__all__"
    success_url: reverse_lazy("wiki:all")


class PostDeleteView(generic.DeleteView):
    model = Post
    fields: "__all__"
    success_url: reverse_lazy("wiki:all")


class PostListApi(generics.ListAPIView):
    queryset = Comment.objects.filter(active=True)
    serializer_class = CommentSerializer


class PostCreateApi(generics.CreateAPIView):
    queryset = Comment.objects.filter(active=True)
    serializer_class = CommentSerializer


class PostDetailApi(generics.RetrieveAPIView):
    queryset = Comment.objects.filter(active=True)
    serializer_class = CommentSerializer


class PostUpdateApi(generics.UpdateAPIView):
    queryset = Comment.objects.filter(active=True)
    serializer_class = CommentSerializer


class PostDeleteApi(generics.DestroyAPIView):
    queryset = Comment.objects.filter(active=True)
    serializer_class = CommentSerializer
