from django.urls import path
from .views import (
    LoadUserView,
    RegisterUserView,
    PasswordTokenCheckAPI,
    RequestPasswordResetEmail,
    SetNewPasswordAPIView
)

app_name = 'auth'

urlpatterns = [
    path('register/', RegisterUserView.as_view()),
    path('user/', LoadUserView.as_view()),
    path('request-reset-email/', RequestPasswordResetEmail.as_view(),
         name="request-reset-email"),
    path('password-reset/<str:uidb64>/<str:token>/',
         PasswordTokenCheckAPI.as_view(), name='password_reset_confirm'),
    path('password-reset-complete', SetNewPasswordAPIView.as_view(),
         name='password-reset-complete')
]