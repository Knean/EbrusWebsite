from django.forms import ModelForm
from .models import Address

class AddressForm(ModelForm):
    class Meta:
        model = Address
        fields = ['user','address_line_1','address_line_2']