from rest_framework import generics, views
from rest_framework.response import Response
from .models import Cards
from .serializers import CardsSerializer
import requests, json
# Create your views here.

currencyURL = 'http://api.currencylayer.com/live?access_key=94dfe8f33ec033fb1f21d0834ea56ad9&format=1'

class CardsApiView(generics.ListAPIView):
    permission_classes = []
    
    queryset = Cards.objects.all()
    serializer_class = CardsSerializer

class CurrencyApiView(views.APIView):
    permission_classes = []

    def get(self, request):
        res = json.loads(requests.get(currencyURL).text)
        return Response([res])