from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics, serializers
from rest_framework.permissions import AllowAny

from Products.models import Products, Category


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'title']

class ForProductCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['title']


class AllProductsSerializer(serializers.ModelSerializer):
    category = ForProductCategorySerializer(many=False)

    class Meta:
        model = Products
        fields = ['id', 'title', 'price', 'image', 'category', 'gender']


class SingleProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = ['id', 'title', 'price', 'image', 'description']



class GetAllProducts(generics.ListAPIView):
    queryset = Products.objects.all()
    serializer_class = AllProductsSerializer
    permission_classes = [AllowAny]


class GetSingleProduct(generics.RetrieveAPIView):
    queryset = Products.objects.all()
    serializer_class = SingleProductsSerializer
    permission_classes = [AllowAny]


class GetAllCategories(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [AllowAny]


class GetCategoryProducts(generics.ListAPIView):
    queryset = Products.objects.all()
    serializer_class = AllProductsSerializer

    def get_queryset(self):
        return self.queryset.filter(category__title = self.kwargs['category'])
