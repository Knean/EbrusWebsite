from django.db import models

# Create your models here.
class Product(models.Model):
    productName = models.CharField(max_length=30)
    imageURL = models.CharField(max_length=30)
    description = models.TextField()

def uploadPath(instance,filename):
        return 'media/{product}/{file}'.format(product= instance.product.productName, file=filename) #get primary key of the last image and add one
class Image(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    image = models.ImageField(upload_to=uploadPath)

    