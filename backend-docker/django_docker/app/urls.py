"""
Store project URL Configuration
"""
from django.conf.urls import url, include
from rest_framework import routers
from app import views

# pylint: disable=C0103
router = routers.DefaultRouter() # noqa
router.register(r'users', views.UserViewSet)
router.register(r'product', views.ProductViewSet)
router.register(r'order', views.OrderViewSet)

urlpatterns = [
    url(r'^', include(router.urls))
]
