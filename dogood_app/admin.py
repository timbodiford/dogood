from django.contrib import admin
from .models import Organization, Event, Volunteer

admin.site.register([Organization, Event, Volunteer])

# Register your models here.