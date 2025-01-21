from django import forms
from django.contrib import admin
from django.core.exceptions import ValidationError
from .models import Registration,launchpad,spotlight,tech_stack_waitlist,vc_application
from django.db import models 
from .forms import RegistrationAdminForm
import json

# Register your models here.
class SpotlightAdmin(admin.ModelAdmin):
    list_display = ['id','name','company_name','email']

class LaunchpadAdmin(admin.ModelAdmin):
    list_display = ['id','name','firm_name','mail','role_name','role_type','role_location','about_job','job_application_link','interested_newsletter_story']

class Tech_stack_waitlistAdmin(admin.ModelAdmin):
    list_display = ['id','name','firm_name','email','interested_newsletter_story']

class VC_applicationAdmin(admin.ModelAdmin):
    list_display = ['id','mail_address','start_up_name','business_description','founders_linkedin_profiles','product_website','funding_amount','pitch_deck']


class RegistrationAdmin(admin.ModelAdmin):
    form = RegistrationAdminForm  # Use the custom form
    list_display = ['id', 'title', 'company', 'website']
    list_filter = ['id', 'title']
    search_fields = ['title', 'company', 'website']

admin.site.register(Registration, RegistrationAdmin)

admin.site.register(spotlight,SpotlightAdmin)
admin.site.register(launchpad,LaunchpadAdmin)
admin.site.register(tech_stack_waitlist,Tech_stack_waitlistAdmin)
admin.site.register(vc_application,VC_applicationAdmin)
# admin.site.register(Registration,Registration_formAdmin)