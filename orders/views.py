from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import orderSerializer
from .models import Order
from cart.forms import ProductForm
from .forms import OrderForm
from django.http import JsonResponse
# Create your views here.

@api_view(['GET'])
def order_detail(request, pk, format = None):
    user_obj = request.user
    #try session.orderid
    #try user.order_set().get(id)
    if request.user.is_authenticated:
        order_obj = user_obj.order_set.filter(id = pk)
        if order_obj.exists():
            serializer = orderSerializer(order_obj.first())
            return Response(serializer.data)
        else:
            return Response(
                data = {'this user has no such orders'},
                status = status.HTTP_404_NOT_FOUND)

    return Response(
        data = {'user not logged in'},
        status = status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
def create_order(request):
    form = OrderForm(request.POST)
    
    if form.is_valid():
        print(form.cleaned_data.get('stripe_token'),'STRIPE TOKEN')
        order_obj = form.save() 
        serializer = orderSerializer(order_obj)       
        return Response(serializer.data)
    else:
        return JsonResponse(form.errors)


