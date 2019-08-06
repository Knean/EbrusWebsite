from rest_framework import serializers
from products.models import Product, Image
from django.contrib.auth.models import User

class ImageSerializer(serializers.RelatedField):

    def to_representation(self, value):

        image= value.image.url
        return {'url': image, 'main':value.main}



class ProductsSerializer(serializers.ModelSerializer):
    image_set = ImageSerializer(many=True,read_only=True)
    class Meta:
        model = Product
        fields =('id','description','productName','image_set','featured')
class AddressSerializer(serializers.RelatedField):
    def to_representation(self,value):
        return {
            "address_line_1":value.address_line_1,
            "address_line_2":value.address_line_2}

class UserSerializer(serializers.ModelSerializer):
    address = AddressSerializer(read_only=True)
    class Meta:
        model = User
        fields = ('username','email', 'address')

       

