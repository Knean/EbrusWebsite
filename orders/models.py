from django.db import models
from django.db.models.signals import m2m_changed
from products.models import Product
from addresses.models import Address
from django.contrib.auth.models import User
from django.conf import settings
import stripe
# Create your models here.
class OrderManager(models.Manager):
    def create_charge(request,amount):
        #add variable ammount
        stripe.api_key = settings.STRIPE_TEST_API_KEY
        
        charge = stripe.Charge.create(
            amount = amount,
            currency = 'eur',
            description = ' example charge',
            source = request.data.get("token"),
            statement_descriptor = 'practicing'
        )
        print(charge, ' this is a charge')
        #return JsonResponse({"success":True})
        
    def create_order(self, request):
        order_obj = self.model.objects.create()
        


class Order(models.Model):
    products = models.ManyToManyField(Product)
    user = models.ForeignKey(User,on_delete = models.CASCADE,  null =True, blank = True)
    address = models.ManyToManyField(Address)
    total = models.DecimalField(default = 0.00, decimal_places = 2, max_digits = 10)

def order_updated(sender, **kwargs):
    total = 0
    if kwargs['action'] == "post_remove" or kwargs['action'] == "post_add":
        for product in kwargs['instance'].products.all():
            total += product.price
        print(kwargs['instance'],' signaaaal')
    kwargs['instance'].total = total
    kwargs['instance'].save()

m2m_changed.connect(order_updated, sender = Order.products.through)
