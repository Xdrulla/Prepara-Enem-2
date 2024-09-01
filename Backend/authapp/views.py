from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def register(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')
     
        if User.objects.filter(username=username).exists():
            return JsonResponse({'message': 'Username already exists'}, status=400)
     
        user = User.objects.create_user(username=username, email=email, password=password)
        return JsonResponse({'message': 'User created successfully'})
    
    return JsonResponse({'error': 'Invalid request method'}, status=405)
  
@csrf_exempt
def user_login(request):
  if request.method == 'POST':
    data = json.loads(request.body)
    username = data.get('username')
    password = data.get('password')
    
    user = authenticate(request, username=username, password=password)
    if user is not None:
      login(request, user)
      return JsonResponse({'sucess': 'Login successful'})
    else:
      return JsonResponse({'message': 'Invalid credentials'}, status=400)                       

