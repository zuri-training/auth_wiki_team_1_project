from multiprocessing import AuthenticationError
from unittest import TextTestRunner
from urllib import request
from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import smart_str, force_str, smart_bytes, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
from .utils import Util
from rest_framework.exceptions import AuthenticationFailed

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            "id",
            "username",
            "first_name",
            "last_name",
            "email",
            "is_active",
            "is_staff",
            "is_superuser",
            "date_joined",
            "last_login"
        )

class ResetPasswordEmailRequestSerializer(serializers.Serializer):
    email = serializers.EmailField(min_length=2)

    class Meta:
        fields = ['email']

class SetNewPasswordSerializer(serializers.Serializer):
    password = serializers.CharField(min_length=6, max_length=68, write_only=TextTestRunner)
    token = serializers.CharField(min_length=1, write_only=TextTestRunner)
    uidb64 = serializers.CharField(min_length=1, write_only=TextTestRunner)

    class Meta:
        field=['password', 'token', 'uidb64']

        def validate(self, attrs):
            try:
                password=attrs.get('password')
                token = attrs.get('token')
                uidb64=attrs.get('uidb64')

                id=force_str(urlsafe_base64_decode(uidb64))

                user=User.objects.get(id=id)

                if not PasswordResetTokenGenerator().check_token(user, token):
                    raise AuthenticationFailed('The reset link is invalid', 401)

                user.set_password(password)
                user.save()

                return (user)
            except Exception as e:
                raise AuthenticationFailed('the reset link is invalid', 401)
            return super().validate(attrs)