from rest_framework import serializers
from .models import Order

class addressSerializer(serializers.RelatedField):
    
    def to_representation(self, value):
        
        return {
            'address_line_1': value.address_line_1,
            'address_line_2':value.address_line_2}


class productsSerializer(serializers.RelatedField):
    
    def to_representation(self, value):

        products= value.id
        return {'product_id': value.id, 'price':value.price, 'name':value.productName}


class orderSerializer(serializers.ModelSerializer):
    products = productsSerializer(many=True,read_only=True)
    address = addressSerializer(many = True, read_only= True)
    class Meta:
        model = Order
        fields = ('total','address','products')