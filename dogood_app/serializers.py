from rest_framework import serializers
from .models import  Organization, Event, Volunteer 
class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('id', 'title', 'description', 'location_address', 'location_city', 'location_state', 'location_zip', 'category', 'org_name',
        #  'eventDate',
        #   'startTime',
        #    'endTime'
           )

class OrganizationSerializer(serializers.ModelSerializer):
    events = EventSerializer(many=True, read_only=True) 
    class Meta:
        model = Organization
        fields = ('id', 'org_name', 'contact_person', 'contact_phone', 'contact_email', 'events')


class VolunteerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Volunteer
        fields = ('id', 'name', 'address', 'city', 'state', 'zip_code', 'phone', 'events')