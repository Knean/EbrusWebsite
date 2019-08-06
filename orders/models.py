from django.db import models
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
