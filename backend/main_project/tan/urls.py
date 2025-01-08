from django.urls import path
from . import views
from .views import form_view, history_view

urlpatterns = [
    path('contact/', views.contact_form, name='contact'),
    path('form/', form_view, name='form_view'),
    path('history/', history_view, name='history_view'),
    path('', views.india_vc_form),
    path('spotlight', views.spotlights),
    path('launchpad', views.launchpads),
    path('tech_stack_waitlist', views.tech_stack_waitlists),
    path('next_india', views.next_india),
    path('vc_application', views.vc_applications),
    path('csrf-token/', views.csrf_token),
]
