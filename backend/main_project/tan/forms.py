from django import forms
from .models import TanFunding
from django.forms import ModelForm
class ContactForm(ModelForm):
    name = forms.CharField(label='Your Name', max_length=100)
    email = forms.EmailField(label='Your Email')
    message = forms.CharField(label='Your Message', widget=forms.Textarea)
   
    
    class Meta:
        model = TanFunding
        fields ="__all__"
