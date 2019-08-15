# Generated by Django 2.2.4 on 2019-08-15 15:54

import datetime
from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('dogood_app', '0002_auto_20190815_1405'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='endTime',
            field=models.DateTimeField(default=datetime.datetime.now),
        ),
        migrations.AddField(
            model_name='event',
            name='eventDate',
            field=models.DateField(default=django.utils.timezone.now),
        ),
        migrations.AddField(
            model_name='event',
            name='startTime',
            field=models.DateTimeField(default=datetime.datetime.now),
        ),
    ]
