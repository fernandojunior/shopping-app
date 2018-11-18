from django.db import models
from django.contrib.auth.models import User


class Product(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    name = models.CharField(max_length=100)
    image_url = models.URLField(max_length=200)
    current_price = models.FloatField()

    def __str__(self):
        return 'Product: name={} image_url={} current_price={}'.format(
            self.name,
            self.image_url,
            self.current_price)

    class Meta:
        db_table = 'product'


class Order(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    credit_card_number = models.CharField(max_length=100)
    credit_card_name = models.CharField(max_length=100)
    credit_card_expiration_date = models.DateField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return 'Order: credit card=({}, {}, {})'.format(
            self.credit_card_number,
            self.credit_card_name,
            self.credit_card_expiration_date)

    class Meta:
        db_table = 'order'


class OrderItem(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    price = models.FloatField()
    quantity = models.IntegerField()
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    order = models.ForeignKey(Order, related_name='order_items', on_delete=models.CASCADE)

    def __str__(self):
        return 'Order item: name={} price={} quantity={}'.format(
            self.product.name,
            self.price,
            self.quantity)

    class Meta:
        db_table = 'order_item'
