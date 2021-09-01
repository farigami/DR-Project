from rest_framework import generics
from .models import Cards
from .serializers import CardsSerializer
# Create your views here.

class CardsApiView(generics.ListAPIView):
    queryset = Cards.objects.all()
    serializer_class = CardsSerializer
    