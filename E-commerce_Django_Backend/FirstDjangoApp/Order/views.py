from rest_framework import generics, serializers
from rest_framework.permissions import AllowAny

from Order.models import Order
from Products.models import Products


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'

 

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