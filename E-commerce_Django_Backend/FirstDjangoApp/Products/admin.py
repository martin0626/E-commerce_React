from django.contrib import admin

from Products.models import Products, Category, Size, ProductGallery


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

@admin.register(Size)
class ProductsAdmin(admin.ModelAdmin):
    list_display = ['size']


@admin.register(ProductGallery)
class ProductsGalleryAdmin(admin.ModelAdmin):
    list_display = ['image', 'product']