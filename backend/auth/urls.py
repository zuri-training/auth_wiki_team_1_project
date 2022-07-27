from django.urls import path
from .views import (
    LoadUserView,
    RegisterUserView
)

app_name = 'auth'

urlpatterns = [
    path('register', RegisterUserView.as_view()),
    path('user', LoadUserView.as_view())
]