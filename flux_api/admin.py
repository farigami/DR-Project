from django.contrib import admin

from .models import Cards
# Register your models here.

class CardsAdmin(admin.ModelAdmin):
    list_display = ('item_name', 'photo', 'description', 'price', 'item_new')

admin.site.register(Cards, CardsAdmin)