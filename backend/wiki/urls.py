from django.urls import path
from . import views


app_name = "wiki"

urlpatterns = [
    path("", views.PostListView.as_view(), name="all"),
    path("create/", views.PostCreateView.as_view(), name="post_create"),
    path("delete/", views.PostDeleteView.as_view(), name="post_delete"),
    path("update/", views.PostUpdateView.as_view(), name="post_update"),
    path("read/", views.PostDetailView.as_view(), name="post_detail"),
    path("create/", views.PostCreateApi.as_view(), name="api_create"),
    path("update/<int:pk>", views.PostUpdateApi.as_view(), name="api_update"),
    path("delete/<int:pk>", views.PostDeleteApi.as_view(), name="api_delete"),
    path("", views.PostListApi.as_view(), name="api_list"),
]
