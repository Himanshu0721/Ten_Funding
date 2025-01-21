from django.db import models

# Create your models here.
class Registration(models.Model):
    id = models.AutoField(primary_key=True) # Integer as primary key
    title = models.TextField(null=True, blank=True)
    company = models.TextField(max_length=255)
    website = models.TextField(null=True, blank=True)
    companyLinkedinUrl = models.TextField(null=True, blank=True)
    twitterUrl = models.TextField(null=True, blank=True)
    city = models.TextField(null=True, blank=True)
    country = models.TextField(null=True, blank=True)
    companyOverview = models.TextField(null=True, blank=True)
    totalFundCorpus = models.TextField(null=True, blank=True)
    currentFundCorpus = models.TextField(null=True, blank=True)
    logo = models.TextField(null=True, blank=True)
    stages = models.JSONField(null=True, blank=True)
    sectors = models.JSONField(null=True, blank=True)
    ticketSize = models.TextField(null=True, blank=True)

    def __str__(self):
        return f"{self.title} - {self.company}"
    
class spotlight(models.Model):
    name = models.TextField(null=True, blank=True)
    email = models.EmailField(null=True, blank=True)
    company_name = models.TextField(null=True, blank=True)

class launchpad(models.Model):
    name = models.TextField(null=True, blank=True)
    firm_name = models.TextField(null=True, blank=True)
    mail = models.TextField(null=True, blank=True)
    role_name = models.TextField(null=True, blank=True)
    role_type = models.TextField(null=True, blank=True)
    role_location = models.TextField(null=True, blank=True)
    about_job = models.TextField(null=True, blank=True)
    job_application_link = models.TextField(null=True, blank=True)
    interested_newsletter_story = models.TextField(null=True, blank=True)

class tech_stack_waitlist(models.Model):
    name = models.TextField(null=True, blank=True)
    email = models.EmailField(null=True, blank=True)
    firm_name = models.TextField(null=True, blank=True)
    interested_newsletter_story = models.TextField(null=True, blank=True)

class vc_application(models.Model):
    mail_address = models.EmailField(null=True, blank=True)
    start_up_name = models.TextField(null=True, blank=True)
    business_description = models.TextField(null=True, blank=True)
    founders_linkedin_profiles  = models.TextField(null=True, blank=True)
    product_website = models.TextField(null=True, blank=True)
    funding_amount = models.TextField(null=True, blank=True)
    pitch_deck = models.TextField(null=True, blank=True)

