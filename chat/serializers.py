from rest_framework import serializers
from .models import chat_message
class FirstSerializer(serializers.RelatedField):#this could be recycled?
    def to_representation(self,value):
        if value.username:
            return value.username
            
        else:
            return "anonymous"
            
class ThreadSerializer(serializers.RelatedField):
    def to_representation(self,value):
        try:
            return value.second.username
            
        except:
            return "public"
            

class MessageSerializer(serializers.ModelSerializer):
    user = FirstSerializer(read_only=True)
    thread = ThreadSerializer(read_only=True)
    class Meta:
        model = chat_message
        fields = ('user','thread', 'message')