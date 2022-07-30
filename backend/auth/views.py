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
            form = RegisterUserForm(request.data)
            if form.is_valid():
                form.save()
                return Response({
                        'success': 'User created successfully'
                    },
                    status = status.HTTP_201_CREATED
                )
            else:
                return Response({
                        'error': "Could not create a user with the provided data",
                        'errors': form.errors
                    },
                    status = status.HTTP_400_BAD_REQUEST
                )
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

