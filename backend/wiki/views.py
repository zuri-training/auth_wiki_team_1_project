from .models import Comment
from .serializers import CommentSerializer
from rest_framework import generics, viewsets
from .models import Post, File
from .serializers import PostSerializer, FileSerializer


from .serializers import PostSerializer

# Create your views here.
class PostListApi(generics.ListAPIView):
    queryset = Post.objects.filter(active= True)
    serializer_class = PostSerializer


class PostCreateApi(generics.CreateAPIView):
    queryset = Post.objects.filter(active=True)
    serializer_class = PostSerializer


class PostDetailApi(generics.RetrieveAPIView):
    queryset = Post.objects.filter(active=True)
    serializer_class = PostSerializer


class PostUpdateApi(generics.UpdateAPIView):
    queryset = Post.objects.filter(active=True)
    serializer_class = PostSerializer


class PostDeleteApi(generics.DestroyAPIView):
    queryset = Post.objects.filter(active=True)
    serializer_class = PostSerializer

class FileViewSet(viewsets.ModelViewSet):
    queryset  = File.objects.all()
    serializer_class = FileSerializer

