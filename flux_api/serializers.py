from re import I
from rest_framework import serializers
from .models import Cards

class CardsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cards
        fields = ['id', 'item_name', 'photo', 'description', 'price', 'item_new']