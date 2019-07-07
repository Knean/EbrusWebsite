from django.urls import path
from products import views
from rest_framework.urlpatterns import format_suffix_patterns
urlpatterns = [
    path('products', views.product_list),
    path('products/<int:pk>',views.product_detail),
    path('search/<query>',views.product_search),
    path('charge',views.create_charge)
]

urlpatterns = format_suffix_patterns(urlpatterns)