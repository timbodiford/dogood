# Generated by Django 2.2.4 on 2019-08-13 17:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('description', models.CharField(max_length=400)),
                ('location_address', models.CharField(max_length=255)),
                ('location_city', models.CharField(max_length=50)),
                ('location_state', models.CharField(max_length=2)),
                ('location_zip', models.CharField(max_length=5)),
                ('category', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Organization',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('org_name', models.CharField(max_length=100)),
                ('contact_person', models.CharField(max_length=100)),
                ('contact_phone', models.CharField(max_length=20)),
                ('contact_email', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Volunteer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('address', models.CharField(max_length=150)),
                ('city', models.CharField(max_length=50)),
                ('state', models.CharField(max_length=2)),
                ('zip_code', models.CharField(max_length=5)),
                ('phone', models.CharField(max_length=11)),
                ('events', models.ManyToManyField(related_name='volunteers', to='dogood_app.Event')),
            ],
        ),
        migrations.AddField(
            model_name='event',
            name='org_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='events', to='dogood_app.Organization'),
        ),
    ]
