from rest_framework import serializers
from cart.models import Cart
class productsSerializer(serializers.RelatedField):

    def to_representation(self, value):

        products= value.id
        return {'product_id': value.id, 'price':value.price, 'name':value.productName}



class CartSerializer(serializers.ModelSerializer):
    products = productsSerializer(many=True,read_only=True)
    class Meta:
        model = Cart
        fields =('id','total', 'products')