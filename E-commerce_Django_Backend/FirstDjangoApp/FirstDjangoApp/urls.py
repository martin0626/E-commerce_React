
from django.contrib import admin
from django.urls import include, path


urlpatterns = [
    path('admin/', admin.site.urls),
    path('products/', include('Products.urls')),
    path('orders/', include('Order.urls')),
    ]