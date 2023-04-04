from django.urls import path

from Order.views import CreateOrder

urlpatterns = [
    path('create/', CreateOrder.as_view(), name='Create Order'),
]
