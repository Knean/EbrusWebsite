from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from .forms import ProductForm
from django.views.decorators.csrf import csrf_exempt
from .models import Cart
from  products.models import Product
from django.core import serializers
from .serializers import CartSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
# Create your views here.
@csrf_exempt
def updatecart(request):
    if request.method == "POST":
        form = ProductForm(request.POST)
        if form.is_valid():
            cart_obj, new_obj = Cart.objects.new_or_get(request)
            BoughtProductID = form.cleaned_data.get('product_id')            
            BoughtProduct = Product.objects.get(id=BoughtProductID)
            if cart_obj.products.filter(id=BoughtProductID).exists():
                cart_obj.products.remove(BoughtProduct)          
            else:
                cart_obj.products.add(BoughtProduct)            
            return JsonResponse({'Success':'nice'})
        else:
            return JsonResponse(form.errors)
    else:
        return HttpResponse('does not exist')
       # cart_obj, new_obj = Cart.objects.new_or_get(request)
        #return JsonResponse(serializers.serialize("json",  Cart.objects.all()),safe = False)



@api_view(['GET'])
def get_cart(request, format = None):
    if request.method == 'GET':        
        cart_obj, new_obj = Cart.objects.new_or_get(request)
        serializer = CartSerializer(cart_obj, many = False)
        return Response(serializer.data)
@api_view(['GET'])
def clear_cart(request,format = None):
    
    cart_obj, new_obj = Cart.objects.new_or_get(request)
    if new_obj:
        print('new cart')
        serializer = CartSerializer(cart_obj, many = False)
        return Response(serializer.data)
    else:
        print('old cart')
        cart_obj.products.clear()
        cart_obj.save()
        serializer = CartSerializer(cart_obj, many = False)
        return Response(serializer.data)
