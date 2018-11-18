"""
Store project URL Configuration
"""
from django.conf.urls import url, include
from rest_framework import routers
from app import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)
router.register(r'product', views.ProductViewSet)
router.register(r'order', views.OrderViewSet)

urlpatterns = [
    url(r'^', include(router.urls))
]