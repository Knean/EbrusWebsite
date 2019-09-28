from django.shortcuts import render
from django.utils.safestring import mark_safe
import json
from rest_framework.decorators import api_view
from .models import chat_message
from .serializers import MessageSerializer
from rest_framework.response import Response
def index(request):
    return render(request, 'chat/index.html',{})
def room(request, room_name):
    
    return render(request, 'chat/mockindex.html', {'room_name_json':mark_safe(json.dumps(room_name))
    })
@api_view(['GET'])
def message_list(request, format = None):
    if request.method == 'GET':        
        messages = chat_message.objects.all()
        serializer = MessageSerializer(messages, many = True)
        return Response(serializer.data)

  
# Create your views here.


