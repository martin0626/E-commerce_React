from django.core.validators import MinLengthValidator
from django.db import models


class Order(models.Model):
    NAME_MAX_LEN = 25
    NAME_MIN_LEN = 3
    PHONE_MIN_LEN = 6
    PHONE_MAX_LEN = 15
    EMAIL_MIN_LEN = 8
    EMAIL_MAX_LEN = 40
    ADDRESS_MIN_LEN = 10
    ADDRESS_MAX_LEN = 200

    first_name = models.CharField(max_length=NAME_MAX_LEN, validators=[MinLengthValidator(NAME_MIN_LEN)])
    last_name = models.CharField(max_length=NAME_MAX_LEN, validators=[MinLengthValidator(NAME_MIN_LEN)])
    phone = models.CharField(max_length=PHONE_MAX_LEN, validators=[MinLengthValidator(PHONE_MIN_LEN)])
    email = models.EmailField(max_length=EMAIL_MAX_LEN, validators=[MinLengthValidator(EMAIL_MIN_LEN)])
    address = models.CharField(max_length=ADDRESS_MAX_LEN, validators=[MinLengthValidator(ADDRESS_MIN_LEN)])
