from django.contrib import admin

from Order.models import Order


# Register your models here.
@admin.register(Order)
class ProductsAdmin(admin.ModelAdmin):
    list_display = ['id', 'first_name', 'last_name']
