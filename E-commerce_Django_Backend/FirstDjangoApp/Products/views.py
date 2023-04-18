from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics, serializers
from rest_framework.permissions import AllowAny

from Products.models import Products, Category, Size, ProductGallery


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'title']


class ForProductCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['title']


class ForProductGallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductGallery
        fields = ['image']


class SizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Size
        fields = ['size']


class AllProductsSerializer(serializers.ModelSerializer):
    category = ForProductCategorySerializer(many=False)
    size = SizeSerializer(many=True)

    class Meta:
        model = Products
        fields = ['id', 'title', 'price', 'image', 'category', 'gender', 'size', 'sale', 'description', 'slug']
        lookup_field = 'slug'


class SingleProductsSerializer(serializers.ModelSerializer):
    gallery = ForProductGallerySerializer(many=True)
    size = SizeSerializer(many=True)
    category = ForProductCategorySerializer(many=False)

    class Meta:
        model = Products
        fields = ['id', 'title', 'price', 'image', 'category', 'gender', 'size', 'sale', 'description', 'gallery', 'slug']
        lookup_field = 'slug'



class GetAllProducts(generics.ListAPIView):
    queryset = Products.objects.all()
    serializer_class = AllProductsSerializer
    permission_classes = [AllowAny]
    lookup_field = 'slug'


class GetSingleProduct(generics.RetrieveAPIView):
    queryset = Products.objects.all()
    serializer_class = SingleProductsSerializer
    permission_classes = [AllowAny]
    lookup_field = 'slug'


class GetAllCategories(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [AllowAny]


class GetCategoryProducts(generics.ListAPIView):
    queryset = Products.objects.all()
    serializer_class = AllProductsSerializer

    def get_queryset(self):
        return self.queryset.filter(category__title = self.kwargs['category'])


class GetSizes(generics.ListAPIView):
    queryset = Size.objects.all()
    serializer_class = SizeSerializer
