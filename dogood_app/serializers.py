from rest_framework import serializers
from .models import  Organization, Event, Volunteer 

class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organization
        fields = ('id', 'org_name', 'contact_person', 'contact_phone', 'contact_email')

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('id', 'title', 'description', 'location_address', 'location_city', 'location_state', 'location_zip', 'category', 'org_name', 'date', 'start_time', 'end_time')

class VolunteerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Volunteer
        fields = ('id', 'name', 'address', 'city', 'state', 'zip_code', 'phone', 'events')