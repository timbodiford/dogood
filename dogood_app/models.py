from django.db import models

# Create your models here.
class Organization(models.Model):
    org_name = models.CharField(max_length=100)
    contact_person = models.CharField(max_length=100)
    contact_phone = models.CharField(max_length=20)
    contact_email = models.CharField(max_length=100)

    def __str__(self):
        return self.org_name


class Event(models.Model):
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=400)
    location_address = models.CharField(max_length=255)
    location_city = models.CharField(max_length=50)
    location_state = models.CharField(max_length=2)
    location_zip = models.CharField(max_length=5)
    category = models.CharField(max_length=50)
    org_name = models.ForeignKey(Organization, on_delete=models.CASCADE, related_name='events')
    date = models.DateField
    start_time = models.TimeField
    end_time = models.TimeField
    # volunteers = models.ManyToManyField('Volunteer', related_name='events')

    def __str__(self):
        return self.title

class Volunteer(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=150)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=2)
    zip_code = models.CharField(max_length=5)
    phone = models.CharField(max_length=11)
    events = models.ManyToManyField('Event', related_name='volunteers')

    def __str__(self):
        return self.name

