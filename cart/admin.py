from django.contrib import admin
from.models import Cart
from products.models import Product

class CartAdmin(admin.ModelAdmin):
    pass
   
admin.site.register(Cart,CartAdmin)
# Register your models here.
