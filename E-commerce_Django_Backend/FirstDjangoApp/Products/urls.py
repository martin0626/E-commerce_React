from django.urls import path
from .views import GetAllProducts, GetSingleProduct, GetAllCategories, GetCategoryProducts, GetSizes

urlpatterns = [
    path('', GetAllProducts.as_view(), name='All Products'),
    path('categories/', GetAllCategories.as_view(), name='All Categories'),
    path('categories/<str:category>/', GetCategoryProducts.as_view(), name="Category Products"),
    path('sizes/', GetSizes.as_view(), name="All Sizes"),
    path('<str:slug>/', GetSingleProduct.as_view(), name='Single Product'),

]
