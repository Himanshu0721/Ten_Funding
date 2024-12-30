from django.db import models

# Create your models here.
from django.db import models

class TanFunding(models.Model):
    name = models.CharField(max_length=100)  # Replace with your actual form fields
    email = models.EmailField()
    message = models.TextField()
    submitted_at = models.DateTimeField(auto_now_add=True)
    # id = models.IntegerField(primary_key=True)  # Integer as primary key
    # first_name = models.TextField()  # First name as an integer
    # last_name = models.TextField()  # Last name as an integer
    # title = models.TextField(max_length=255, null=True, blank=True)
    # company = models.TextField(max_length=255)
    # company_name_for_emails = models.TextField(max_length=255, null=True, blank=True)
    # email = models.TextField(unique=True)
    # phone = models.TextField(max_length=15, null=True, blank=True)
    # employees = models.IntegerField(null=True, blank=True)
    # industry = models.TextField(max_length=255, null=True, blank=True)
    # keywords = models.TextField(null=True, blank=True)
    # person_linkedin_url = models.TextField(null=True, blank=True)
    # website = models.TextField(null=True, blank=True)
    # company_linkedin_url = models.TextField(null=True, blank=True)
    # facebook_url = models.TextField(null=True, blank=True)
    # twitter_url = models.TextField(null=True, blank=True)
    # city = models.TextField(max_length=255, null=True, blank=True)
    # state = models.TextField(max_length=255, null=True, blank=True)
    # country = models.TextField(max_length=255, null=True, blank=True)
    # company_address = models.TextField(null=True, blank=True)
    # company_city = models.TextField(max_length=255, null=True, blank=True)
    # company_state = models.TextField(max_length=255, null=True, blank=True)
    # company_country = models.TextField(max_length=255, null=True, blank=True)
    # company_phone = models.TextField(max_length=15, null=True, blank=True)
    # seo_description = models.TextField(null=True, blank=True)
    # annual_revenue = models.TextField(max_digits=15, decimal_places=2, null=True, blank=True)
    # total_funding = models.TextField(max_digits=15, decimal_places=2, null=True, blank=True)
    # latest_funding = models.TextField(max_length=255, null=True, blank=True)
    # latest_funding_amount = models.TextField(max_digits=15, decimal_places=2, null=True, blank=True)
    # last_raised_at = models.TextField(null=True, blank=True)

    def __str__(self):
        return f"{self.name} - {self.email}"

