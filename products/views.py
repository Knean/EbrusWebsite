from django.shortcuts import render
import stripe
from django.http import JsonResponse
import django.http.response
from django.conf import settings
# Create your views here.
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from products.models import Product
from products.serializers import ProductsSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
@api_view(['GET',])
def product_search(request, query, format = None):
    if request.method == 'GET':        
        products = Product.objects.filter(productName__contains = query)
        serializer = ProductsSerializer(products, many = True)
        return Response(serializer.data)

@api_view(['GET','POST'])
def product_list(request, format = None):
    if request.method == 'GET':        
        products = Product.objects.all()
        serializer = ProductsSerializer(products, many = True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ProductsSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

@api_view(['GET','POST','DELETE'])
def product_detail(request, pk, format = None):
    
    try:
        product = Product.objects.get(pk=pk)
    except Product.DoesNotExist:
        return Response(status = status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':     
        serializer = ProductsSerializer(product)
        return Response(serializer.data)

    elif request.method == 'PUT':
        #data = JSONParser().parse(request)
        serializer = ProductsSerializer(product, data =request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        product.delete()
        return HttpResponse(status = status.HTTP_204_NO_CONTENT)
    
@api_view(['POST'])
def create_charge(request):
    stripe.api_key = settings.STRIPE_TEST_API_KEY
    try:
        charge = stripe.Charge.create(
            amount = 299,
            currency = 'eur',
            description = ' example charge',
            source = request.data.get("token"),
            statement_descriptor = 'practicing'
        )
        print(charge, ' this is a charge')
        return JsonResponse({"success":True})
    except:
        return JsonResponse({"success":False})

@api_view(['POST'])
def create_user(request):
    username = request.data.get('username')
    password = request.data.get('password')
    new_user = User.objects.create_user(username,'',password)
    new_user.save()
    return Response(data= None, status = 201)

@api_view(['GET'])
def get_user(request):
    
    print(request.user)
    return JsonResponse({"name": request.user.username, 'age':'18'})

@api_view(['POST'])
@csrf_exempt
def login_user(request):
    #print(request.META['HTTP_X_CSRFTOKEN'], 'loooooooooooooooooooogin')
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        return JsonResponse({'LoggedIn':True})
        ...
    else:
        # Return an 'invalid login' error message.
        return JsonResponse({'LoggedIn':False})
        ...
@csrf_exempt
@api_view(['GET'])
def logout_user(request):
    logout(request)
    return Response(data= None, status = 200)
