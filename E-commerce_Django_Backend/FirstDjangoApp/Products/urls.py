from django.urls import path
from .views import GetAllProducts, GetSingleProduct, GetAllCategories, GetCategoryProducts

urlpatterns = [
    path('', GetAllProducts.as_view(), name='All Products'),
    path('<int:pk>/', GetSingleProduct.as_view(), name='Single Product'),
    path('categories/', GetAllCategories.as_view(), name='All Categories'),
    path('categories/<str:category>/', GetCategoryProducts.as_view(), name="Category Products")
]
