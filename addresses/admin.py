from django.contrib import admin
from .models import Address
# Register your models here.


class addressadmin(admin.ModelAdmin):
    pass
    
admin.site.register(Address,addressadmin)