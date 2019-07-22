from django.db import models
from products.models import Product
class CartManager(models.Manager):
    def new_or_get(self,request):
        cart_id = request.session.get("cart_id",None)
        qs = self.get_queryset().filter(id=cart_id)
        if qs.exists():
            new_obj = False
            cart_obj = qs.first()
        else:
            cart_obj = self.model.objects.create(total= 5.55)
            new_obj = True
            request.session['cart_id'] = cart_obj.id
        return cart_obj, new_obj



# Create your models here.
class Cart(models.Model):
    objects = CartManager()
    products = models.ManyToManyField(Product)
    total = models.DecimalField(decimal_places = 2,max_digits = 10)