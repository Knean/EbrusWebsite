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


