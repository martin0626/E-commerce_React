# Generated by Django 4.0.1 on 2023-04-05 17:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Products', '0002_alter_products_description'),
        ('Order', '0003_alter_order_products'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='products',
            field=models.ManyToManyField(blank=True, null=True, to='Products.Products'),
        ),
    ]