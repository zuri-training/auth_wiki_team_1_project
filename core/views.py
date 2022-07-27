from rest_framework.views import APIView
from rest_framework import permissions, status
from rest_framework.response import Response

class HomeView(APIView):
    permission_classes = (permissions.AllowAny, )
    
    def get(self, request):
        return Response({"Hello, Guest!. You're at the index."}, status.HTTP_200_OK)