"""
Store project URL Configuration
"""
from django.conf.urls import url, include
from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token

urlpatterns = [
    url(r'^', include('app.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('login/', obtain_jwt_token),
    path('refresh-token/', refresh_jwt_token),
]
