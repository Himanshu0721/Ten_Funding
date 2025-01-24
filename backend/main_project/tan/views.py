from django.shortcuts import render,redirect
from .models import Registration
# from django.http import HttpResponseRedirect
from django.http import JsonResponse    
from django.middleware.csrf import get_token

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers import (
    RegistrationSerializer,
    SpotlightSerializer,
    LaunchpadSerializer,
    TechStackWaitlistSerializer,
    VCApplicationSerializer,
)
import os
import socket
from django.http import JsonResponse

def test_connection(request):
    db_host = os.getenv('DB_HOST', 'dpg-cu9ngc1u0jms73fhh84g-a.render.com')
    try:
        ip = socket.gethostbyname(db_host)
        return JsonResponse({'status': 'success', 'ip': ip})
    except socket.gaierror as e:
        return JsonResponse({'status': 'error', 'error': str(e)})


class RegistrationView(APIView):
    def post(self, request):
        serializer = RegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Registration successful!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def get(self, request):
        items = Registration.objects.all()
        serializer = RegistrationSerializer(items, many=True)
        return Response(serializer.data)
    
class SpotlightListView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = SpotlightSerializer(data=request.data)  
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Successfully submitted!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class LaunchpadListView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = LaunchpadSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Successfully submitted!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TechStackWaitlistListView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = TechStackWaitlistSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Successfully submitted!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class VCApplicationListView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = VCApplicationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Successfully submitted!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Repeat similar views for other models


def csrf_token(request):
    return JsonResponse({'csrfToken': get_token(request)})

