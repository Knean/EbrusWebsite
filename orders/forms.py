from django import forms
from .models import Order

class OrderForm(forms.ModelForm):
    stripe_token = forms.CharField()
    class Meta:
        model = Order
        fields =[
            'products',
            'user',
            'address',
            'total'
        ]



