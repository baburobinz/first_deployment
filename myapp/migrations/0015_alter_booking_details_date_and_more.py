# Generated by Django 4.1.5 on 2023-05-13 11:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0014_alter_booking_details_date_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='booking_details',
            name='Date',
            field=models.CharField(max_length=10),
        ),
        migrations.AlterField(
            model_name='booking_details_for_user',
            name='Date',
            field=models.CharField(max_length=10),
        ),
    ]