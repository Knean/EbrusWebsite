from django.contrib import admin
from .models import chat_message, chat_thread
# Register your models here.

class MessageInline (admin.TabularInline):
    model = chat_message

class ChatAdmin(admin.ModelAdmin):
    inlines = [
        MessageInline,
    ]

admin.site.register(chat_thread, ChatAdmin)