from rest_framework import serializers
from products.models import Product, Image
class ImageSerializer(serializers.RelatedField):

    def to_representation(self, value):

        image= value.image.url
        return {'url': image, 'main':value.main}



class ProductsSerializer(serializers.ModelSerializer):
    image_set = ImageSerializer(many=True,read_only=True)
    class Meta:
        model = Product
        fields =('id','description','productName','image_set','featured')

