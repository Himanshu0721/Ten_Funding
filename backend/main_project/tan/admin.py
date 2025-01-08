from django.contrib import admin
from .models import funding,india_vc,launchpad,spotlight,tech_stack_waitlist,vc_application
from django.db import models 

# Register your models here.
class SpotlightAdmin(admin.ModelAdmin):
    list_display = ['id','name','company_name','email']

class LaunchpadAdmin(admin.ModelAdmin):
    list_display = ['id','name','firm_name','mail','role_name','role_type','role_location','about_job','job_application_link','interested_newsletter_story']

class Tech_stack_waitlistAdmin(admin.ModelAdmin):
    list_display = ['id','name','firm_name','email','interested_newsletter_story']

class VC_applicationAdmin(admin.ModelAdmin):
    list_display = ['id','mail_address','start_up_name','business_description','founders_linkedin_profiles','product_website','funding_amount','pitch_deck']

class India_vc_formAdmin(admin.ModelAdmin):
    list_display = ['id','name','email','firm_name','founder_year','ticket_size','current_fund_size','aum','portfolio_count','portfolio_companies']
    list_filter = ['id','name']
    search_fields = ['name','email','firm_name']

admin.site.register(spotlight,SpotlightAdmin)
admin.site.register(launchpad,LaunchpadAdmin)
admin.site.register(tech_stack_waitlist,Tech_stack_waitlistAdmin)
admin.site.register(vc_application,VC_applicationAdmin)
admin.site.register(india_vc,India_vc_formAdmin)
