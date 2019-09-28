from channels.generic.websocket import WebsocketConsumer, AsyncWebsocketConsumer
from channels.db import database_sync_to_async
from asgiref.sync import async_to_sync
from .models import chat_thread, chat_message
import json
from django.contrib.auth.models import User
from .serializers import MessageSerializer
class ChatConsumer(AsyncWebsocketConsumer):
    thread = None
    
    #user = User.objects.all()[0]
    async def connect(self):
        
        user = self.scope['user']
        print (user, " this is the user")        
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = f"chat_{self.room_name}"
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name)

        self.thread =  await self.get_thread(user,self.scope['url_route']['kwargs']['room_name'])#throw error message     
        await self.accept()

    async def disconnect(self,close_code):
        await self.channel_layer.group_discard(self.room_group_name,self.channel_name)
        
    async def receive(self, text_data):
        user = self.scope['user']

        text_data_json = json.loads(json.dumps(text_data))
        message = text_data_json[0]
        await self.createmessage(user, message, self.thread) #fix this nigga
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type':'chat_message',
                'message':message
            }
        )

    async def chat_message(self,event):
        message = event['message']        
        await self.send(text_data=json.dumps({'message':message}))
    @database_sync_to_async
    def createmessage(self, user, message, thread):        
        message = chat_message(message = message, thread = thread, user =user )
        message.save()

    @database_sync_to_async
    def get_thread(self, first,second):
        print('please dont print')
        try:
            thread = chat_thread.objects.get_or_make_thread(first, second)
        except Exception as gayness:
            print(gayness)
            return None
        return thread
        
    

class PublicChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        print(self.scope['user'], 'user at connection')
       
        self.room_group_name = 'pubchat'     
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name)

        self.thread = await self.get_thread() 
        await self.accept()

    async def disconnect(self,close_code):
        print('closed with the code: ', close_code)
        await self.channel_layer.group_discard(self.room_group_name,self.channel_name)

    async def receive(self, text_data):
        
        user = self.scope['user']

        print(self.scope['user'], ' this should say anonymous')
     

        text_data_json = json.loads(text_data)
       
        message = text_data_json['message']
        message_obj = await self.createmessage(user, message, self.thread) #fix this nigga
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type':'chat_message',
                'message':message_obj
            }
        )
    async def chat_message(self,event):
        message = event['message']        
        await self.send(text_data=json.dumps({'message':message}))

    @database_sync_to_async
    def createmessage(self, user, message, thread): 
             
        try:
            message = chat_message(message = message, thread = thread, user = user )
        except:
             message = chat_message(message = message, thread = thread, user =None )
        message.save()        
        serializer = MessageSerializer(message)
        return serializer.data
       

    @database_sync_to_async
    def get_thread(self):
        thread =  chat_thread.objects.filter(first = None).first() 
        #thread = chat_thread.objects.get_pubthread()
        print( thread, 'this should be a thread')
        return thread
