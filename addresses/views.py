from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from .forms import AddressForm
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Address
from .serializers import AddressSerializer

# Create your views here.

@api_view(['POST'])
@csrf_exempt
def createAddress(request):
    #print(request.META['HTTP_X_CSRFTOKEN'], 'loooooooooooooooooooogin')
    if request.method == "POST":
        form = AddressForm(request.POST)
        if form.is_valid():
            address = form.save(commit = False)
            user = request.user
            if user.is_authenticated:
                address.user = user                        
            else:
                request.session['address_id']= address.id
            address.save()            
            serializer = AddressSerializer(address,many = False)
            print(address.address_line_1)
            return Response(serializer.data)
        return JsonResponse(form.errors) 


@api_view(['GET'])
def getAddress(request):
    if request.user.is_authenticated:
        try:
            address = request.user.address
        except:
            return Response(data= None, status =status.HTTP_404_NOT_FOUND)
    else:
        addressID = request.session.get('address_id',None)
        if addressID:
            address = Address.objects.get(id=addressID)
        else:
            return Response(data= None, status =status.HTTP_404_NOT_FOUND) 
    serializer = AddressSerializer(address,many = False)
    print(address.address_line_1)
    return Response(serializer.data)
