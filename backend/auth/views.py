from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status, generics
from django.contrib.auth.models import User
from auth.forms import RegisterUserForm
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import smart_str, force_str, smart_bytes, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
from .utils import Util

from auth.serializers import UserSerializer, ResetPasswordEmailRequestSerializer,SetNewPasswordSerializer
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

class RequestPasswordResetEmail(generics.GenericAPIView):
    serializer_class = ResetPasswordEmailRequestSerializer
    
    def post(self, request):
        serializer = self.serializer_class(data=request.data)

        email = request.data.get('email', '')

        if User.objects.filter(email=email).exists():
            try:
                user = User.objects.get(email=email)
                uidb64 = urlsafe_base64_encode(smart_bytes(user.id))
                token = PasswordResetTokenGenerator().make_token(user)
                current_site = get_current_site(
                    request=request).domain
                relativeLink = '/password-reset/'+uidb64+'/'+token+'/'

                redirect_url = request.data.get('redirect_url', '')
                absurl = 'http://'+current_site + relativeLink
                email_body = 'Hello, \n Use link below to reset your password  \n' + \
                    absurl+"?redirect_url="+redirect_url
                data = {'email_body': email_body, 'to_email': user.email,
                        'email_subject': 'Reset your passsword'}
                Util.send_email(data)
            except Exception as e:
                print(e)
        return Response({'success': 'We have sent you a link to reset your password'}, status=status.HTTP_200_OK)
class PasswordTokenCheckAPI(generics.GenericAPIView):
    def get(self, request, uidb64, token):
        
        try:
            id=smart_str(urlsafe_base64_decode(uidb64))
            user=User.objects.get(id=id)

            
            if not PasswordResetTokenGenerator().check_token(user, token):
                return Response({'error': 'Token is not valid, please request a new one'}, status=status.HTTP_401_UNAUTHORIZED)

            return Response({'success': True, 'message': 'Credentials Calid', 'uidb64': uidb64, 'token': token}, status=status.HTTP_200_OK)

        except DjangoUnicodeDecodeError as identifier:
            pass

class SetNewPasswordAPIView(generics.GenericAPIView):
    serializer_class=SetNewPasswordSerializer

    def patch(self, request):
        serializer=self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response({'success': True, 'message': 'Password reset success'}, status=status.HTTP_200_OK)
