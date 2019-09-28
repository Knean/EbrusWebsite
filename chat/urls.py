from django.urls import path

from . import views
urlpatterns = [
    path('',views.index, name = 'index'),
    path('api/',views.message_list,name = 'messages_api'),
    path('<str:room_name>/', views.room, name = 'room'),
    
]
