from django.urls import path, include
from rest_framework import routers


from . import views

router = routers.DefaultRouter()
router.register('organizations', views.OrganizationView)
router.register('events', views.EventView)
router.register('volunteers', views.VolunteerView)

urlpatterns = [
    path('', include(router.urls))

]