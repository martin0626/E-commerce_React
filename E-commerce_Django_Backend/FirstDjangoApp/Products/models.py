from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator


class Category(models.Model):
    TITLE_MAX_LEN = 20
    title = models.CharField(max_length=TITLE_MAX_LEN)

    def __str__(self):
        return self.title

    def __repr__(self):
        return self.title


class Products(models.Model):
    TITLE_MAX_LEN = 20
    DESCRIPTION_MAX_LEN = 200
    DESCRIPTION_MIN_LEN = 50
    PRICE_MIN_VALUE = 0
    SALE_MIN_VALUE = 0
    SALE_MAX_VALUE = 100

    GENDER_CHOICES = (
        ('Men', 'Men'),
        ('Women', 'Women'),
    )

    title = models.CharField(max_length=TITLE_MAX_LEN)

    description = models.TextField(max_length=200)

    image = models.URLField(max_length=200)

    price = models.IntegerField(validators=[MinValueValidator(PRICE_MIN_VALUE)])

    sale = models.IntegerField(default=0, validators=[MinValueValidator(PRICE_MIN_VALUE), MaxValueValidator(SALE_MAX_VALUE)])

    gender = models.CharField(
        choices=GENDER_CHOICES,
        max_length=max([len(choice) for choice, _ in GENDER_CHOICES]),
        default='Men',
    )

    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.title