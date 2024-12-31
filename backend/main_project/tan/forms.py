from django import forms
from .models import funding
from django.forms import ModelForm
class ContactForm(ModelForm):
    first_name = forms.CharField(label='Your first_name')
    # last_name = forms.EmailField(label='Your last_name')
    title = forms.CharField(label='Your title')
   
    
    class Meta:
        model = funding
        fields ="__all__"
