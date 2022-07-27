from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status
from django.contrib.auth.models import User
from auth.forms import RegisterUserForm

from auth.serializers import UserSerializer
# Create your views here.

class RegisterUserView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request):
        try:
            form = RegisterUserForm(request.POST)
            if form.is_valid():
                form.save()
                user = UserSerializer(form.instance, many=False)
                return Response({
                        'user': user.data,
                        'message': 'User created successfully'
                    },
                    status = status.HTTP_201_CREATED
                )
            else:
                return Response(form.errors)
        except:
            return Response(
                {'error': 'Something went wrong when trying to register account'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class LoadUserView(APIView):
    def get(self, request):
        try:
            user = UserSerializer(request.user, many=False)
            return Response(
                {'user': user.data},
                status=status.HTTP_200_OK
            )
        except:
            return Response(
                {'error': 'Something went wrong when trying to load'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

