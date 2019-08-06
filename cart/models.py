from django.db import models
from products.models import Product
from django.db.models.signals import m2m_changed
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
    total = models.DecimalField(default = 0.00, decimal_places = 2,max_digits = 10)

def cart_updated(sender,**kwargs):
    total = 0
    print('please pring this')
    if kwargs['action'] == "post_remove" or kwargs['action'] == "post_add":
        for product in kwargs['instance'].products.all():
            total += product.price
        print(kwargs['instance'],' signaaaal')
    kwargs['instance'].total = total
    kwargs['instance'].save()


        
m2m_changed.connect(cart_updated, sender = Cart.products.through)