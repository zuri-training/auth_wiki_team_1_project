from django.urls import path
from . import views
from rest_framework import routers


app_name = "wiki"

router = routers.DefaultRouter()
router.register(r"posts", views.PostViewSet, basename="posts")
router.register(r"comments", views.CommentViewSet, basename="comments")
router.register(r"files", views.FileViewSet, basename="files")
router.register(r"reactions", views.ReactionViewSet, basename="reaction")

urlpatterns = router.urls
