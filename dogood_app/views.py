# from django.shortcuts import render
from rest_framework import viewsets

from .serializers import EventSerializer, OrganizationSerializer, VolunteerSerializer
from .models import Organization, Event, Volunteer


# Create your views here.

class OrganizationView(viewsets.ModelViewSet):
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer

class EventView(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class VolunteerView(viewsets.ModelViewSet):
    queryset = Volunteer.objects.all()
    serializer_class = VolunteerSerializer
