from django.urls import reverse
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.test import APITestCase
from rest_framework_jwt import utils
from app.models import Product, Order


class BaseTest(APITestCase):
    def setUp(self):
        self.email = 'admin@example.com'
        self.username = 'admin'
        self.password = 'password123'
        self.user = User.objects.create_user(self.username, self.email, self.password)

        self.data = {'username': self.username, 'password': self.password}

    def login(self):
        """
        Ensure we can login with a default admin user and get the token.
        """
        url = reverse('login')
        response = self.client.post(url, self.data, format='json')

        decoded_payload = utils.jwt_decode_handler(response.data['token'])
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(decoded_payload['username'], self.username)
        return response.data['token']


class UserTests(BaseTest):
    def test_create_user(self):
        """
        Ensure we can create a new user object.
        """
        token = self.login()
        url = reverse('user-list')
        data = {'username': 'xxx', 'email': 'xxx@example.com'}
        self.client.credentials(HTTP_AUTHORIZATION='JWT ' + token)
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(User.objects.filter(username='xxx').count(), 1)
        self.assertEqual(User.objects.get(username='xxx').username, data['username'])
        self.assertEqual(User.objects.get(username='xxx').email, data['email'])
        return User.objects.get(username='xxx')


class ProductTests(BaseTest):
    def test_create_product(self):
        """
        Ensure we can create a new product object.
        """
        token = self.login()
        url = reverse('product-list')

        # pylint: disable=C0301
        data = {
            'name': 'Blade Runner 1982 (DVD movie)',
            'current_price': 1.0,
            'image_url': 'https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg' # noqa
        }

        self.client.credentials(HTTP_AUTHORIZATION='JWT ' + token)
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Product.objects.all().count(), 1)
        return User.objects.first()


class OrderTests(BaseTest):
    def test_create_order(self):
        """
        Ensure we can create a order object.
        """
        token = self.login()
        user = User.objects.first()
        product = Product.objects.create(
            name="p",
            current_price=1.0,
            image_url='http://example.com/image')

        data = {
            'owner': '/users/{}/'.format(user.id),
            'credit_card_number': '4024007107836305',
            'credit_card_name': 'test',
            'credit_card_expiration_date': '2018-10-22',
            'order_items': [
                {
                    'price': 1.0,
                    'quantity': 2,
                    'product': '/product/{}/'.format(product.id)
                }
            ]
        }

        self.client.credentials(HTTP_AUTHORIZATION='JWT ' + token)
        response = self.client.post('/order/', data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Order.objects.all().count(), 1)
        self.assertEqual(Order.objects.first().order_items.count(), 1)
        self.assertEqual(Order.objects.first().order_items.first().price, 1.0)
        self.assertEqual(Order.objects.first().owner.username, 'admin')
