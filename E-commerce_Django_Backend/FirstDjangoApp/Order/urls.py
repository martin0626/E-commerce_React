from django.urls import path

from Order.views import CreateOrder, GetSingleOrder

urlpatterns = [
    path('create/', CreateOrder.as_view(), name='Create Order'),
    path('<int:pk>/', GetSingleOrder.as_view(), name='Get Order')
]
