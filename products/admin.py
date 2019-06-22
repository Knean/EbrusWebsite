from django.contrib import admin
from products.models import Product
# Register your models here.
from products.models import Image
class ImageInline(admin.TabularInline):
    model = Image
class ProductAdmin(admin.ModelAdmin):
      inlines = [
        ImageInline,
    ]

admin.site.register(Product,ProductAdmin)
class ImageAdmin(admin.ModelAdmin):
    pass
admin.site.register(Image,ImageAdmin)