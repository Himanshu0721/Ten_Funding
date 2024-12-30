from django.urls import path
from . import views
from .views import form_view, history_view

urlpatterns = [
    path('contact/', views.contact_form, name='contact'),
    path('form/', form_view, name='form_view'),
    path('history/', history_view, name='history_view'),
]
