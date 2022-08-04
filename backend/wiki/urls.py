from django.urls import path
from . import views
from rest_framework import routers


app_name = "wiki"

router = routers.DefaultRouter()
router.register(r'files', views.FileViewSet)

urlpatterns = [
    path("create/", views.PostCreateApi.as_view(), name="api_create"),
    path("update/<int:pk>", views.PostUpdateApi.as_view(), name="api_update"),
    path("delete/<int:pk>", views.PostDeleteApi.as_view(), name="api_delete"),
    path("", views.PostListApi.as_view(), name="api_list"),
    router.urls,
]
