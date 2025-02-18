from django.shortcuts import render,redirect
from .models import Registration
# from django.http import HttpResponseRedirect
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate, login
from django.http import JsonResponse    
from django.middleware.csrf import get_token
# from rest_framework.decorators import api_view
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

class AdminLoginView(APIView):
    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")

        user = authenticate(username=username, password=password)
        if user and user.is_superuser:
            token, _ = Token.objects.get_or_create(user=user)
            return Response({"token": token.key}, status=status.HTTP_200_OK)
        return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)
