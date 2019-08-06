from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Address(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null =True, blank = True)
    address_line_1  = models.CharField(max_length=120)
    address_line_2  = models.CharField(max_length=120, null=True, blank=True)