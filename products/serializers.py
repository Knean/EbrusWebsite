from rest_framework import serializers
from products.models import Product, Image
class ImageSerializer(serializers.RelatedField):

    def to_representation(self, value):

        image= value.image.url
        return {'url': image,'someshit':'aaaaaaaaaa'}



class ProductsSerializer(serializers.ModelSerializer):
    image_set = ImageSerializer(many=True,read_only=True)
    class Meta:
        model = Product
        fields =('id','imageURL','description','productName','image_set')

