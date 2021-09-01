from django.db import models

# Create your models here.
class Cards(models.Model):
    item_name = models.CharField(max_length=50, verbose_name='Название')
    photo = models.ImageField(null=True, blank=True, verbose_name='Изображение')
    description = models.CharField(max_length=200, verbose_name='Описание')
    price = models.FloatField(verbose_name='Цена')
    item_new = models.BooleanField(verbose_name='Новинка')
    
    class Meta:
        ordering = ['-item_new', '-price']

    def __str__(self):
        return self.item_name