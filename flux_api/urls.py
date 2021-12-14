from rest_framework import routers, urlpatterns
from .views import CardsApiView, CurrencyApiView
from django.urls import path

urlpatterns = [
    path('cards/', CardsApiView.as_view(), name='cards'),
    path('currency/', CurrencyApiView.as_view(), name='currency')
]