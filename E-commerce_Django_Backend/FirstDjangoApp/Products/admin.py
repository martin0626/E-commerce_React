from django.contrib import admin

from Products.models import Products, Category


# Register your models here.
@admin.register(Products)
class ProductsAdmin(admin.ModelAdmin):
    list_display = ['title']


class ProductsInline(admin.TabularInline):
    model = Products
    fields = ["title"]


@admin.register(Category)
class CategoriesAdmin(admin.ModelAdmin):
    list_display = ['title']
    inlines = [ProductsInline]

