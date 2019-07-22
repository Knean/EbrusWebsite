from django import forms
from products.models import Product

class CartForm(forms.Form):
    product_id = forms.IntegerField(max_value=999)

    def clean_product_id(self):
        product_id = self.cleaned_data.get('product_id')
        product_set = Product.objects.filter(id=product_id)
        if not product_set.exists():
            raise forms.ValidationError('Invalid product ID')
        return product_id



