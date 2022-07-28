from django.urls import path
from . import views

urlpatterns = [
    path("", views.wiki_index, name="wiki_index"),
    path("<category>/", views.wiki_category, name="wiki_category"),
]
