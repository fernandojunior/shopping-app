from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=100)
    image_url = models.URLField(max_length=100)
    current_price = models.FloatField()

    def __str__(self):
        return 'Product: name={} image_url={} current_price={}'.format(
            self.name,
            self.image_url,
            self.current_price)

    class Meta:
        db_table = 'product'


class Order(models.Model):
    # TODO owner = models.ForeignKey('auth.User', related_name='orders', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    credit_card_number = models.CharField(max_length=100)
    credit_card_name = models.CharField(max_length=100)
    credit_card_expiration_date = models.DateField()

    def __str__(self):
        return 'Order: credit card=({}, {}, {})'.format(
            self.credit_card_number,
            self.credit_card_name,
            self.credit_card_expiration_date)

    class Meta:
        db_table = 'order'


class OrderItem(models.Model):
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
