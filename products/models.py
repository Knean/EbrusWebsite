from django.db import models

# Create your models here.
class Product(models.Model):
    def  __str__(self):
        return self.productName
    productName = models.CharField(max_length=30)    
    description = models.TextField()
    price = models.DecimalField(max_digits= 9,decimal_places = 2, default = 0.0)
    featured= models.BooleanField()

def uploadPath(instance,filename):
        return 'media/{product}/{file}'.format(product= instance.product.productName, file=filename) #get primary key of the last image and add one
class Image(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    image = models.ImageField(upload_to=uploadPath)
    main= models.BooleanField()

    