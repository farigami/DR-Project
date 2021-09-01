from rest_framework import routers, urlpatterns
from .views import CardsApiView
from django.urls import path

urlpatterns = [
    path('cards/', CardsApiView.as_view(), name='cards')
]