# Generated by Django 2.2.4 on 2019-08-15 16:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('dogood_app', '0003_auto_20190815_1554'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='event',
            name='endTime',
        ),
        migrations.RemoveField(
            model_name='event',
            name='eventDate',
        ),
        migrations.RemoveField(
            model_name='event',
            name='startTime',
        ),
    ]
