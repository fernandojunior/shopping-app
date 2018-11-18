from django.contrib.auth.models import User
from rest_framework import viewsets
from .models import Product, Order
from .serializers import UserSerializer
from .serializers import ProductSerializer, OrderSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class ProductViewSet(viewsets.ModelViewSet):
    # pylint: disable=C0301
    """
    API endpoint that allows products to be viewed or edited.

    POST request body example:
        {
            "name": "Blade Runner 1982 (DVD movie)",
            "current_price": 1.0,
            "image_url": "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
        }
    """ # noqa
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class OrderViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows orders to be viewed or edited.

    POST request body example:
        {
            "owner": "http://127.0.0.1:8000/users/1/",
            "credit_card_number": "4024007107836305",
            "credit_card_name": "admin",
            "credit_card_expiration_date": "2018-10-22",
            "order_items": [
                {"price":  1.0, "quantity": 2, "product": "http://127.0.0.1:8000/product/1/"}
            ]
        }
    """
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
