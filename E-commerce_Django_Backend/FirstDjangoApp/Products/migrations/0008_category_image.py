# Generated by Django 4.0.1 on 2023-05-10 16:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Products', '0007_alter_products_slug'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='image',
            field=models.URLField(blank=True, null=True),
        ),
    ]
