# Generated by Django 4.1.5 on 2023-06-01 06:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0027_haircut_price_change_makeup_price_change_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='feedback',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=20)),
                ('Message', models.CharField(max_length=200)),
            ],
        ),
    ]
