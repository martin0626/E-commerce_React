from rest_framework import generics, serializers
from rest_framework.permissions import AllowAny

from Order.models import Order
from Products.models import Products


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'

    # def create(self, validated_data):
    #     validated_data['products'] = Products.objects.filter(id=2)
    #     print(validated_data)
    #     return validated_data


class SingleOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['first_name', 'last_name', 'email']


class CreateOrder(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [AllowAny]

    # def post(self, request, *args, **kwargs):
    #     request.data.update(products=[])
    #     return self.create(request, *args, **kwargs)


class GetSingleOrder(generics.RetrieveAPIView):
    queryset = Order.objects.all()
    serializer_class = SingleOrderSerializer
    permission_classes = [AllowAny]