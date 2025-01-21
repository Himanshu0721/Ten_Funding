from django import forms
from django.core.exceptions import ValidationError
from .models import Registration

class RegistrationAdminForm(forms.ModelForm):
    # Custom fields for JSON validation
    stages = forms.JSONField(required=False, help_text="Enter a JSON array (e.g., [\"Seed\", \"Series A\"]).")
    sectors = forms.JSONField(required=False, help_text="Enter a JSON array (e.g., [\"Technology\", \"Healthcare\"]).")

    class Meta:
        model = Registration
        fields = '__all__'

    # Additional validation (optional, if more complex checks are needed)
    def clean_stages(self):
        stages = self.cleaned_data.get('stages')
        if not isinstance(stages, list):
            raise ValidationError("Stages must be a valid JSON array.")
        return stages

    def clean_sectors(self):
        sectors = self.cleaned_data.get('sectors')
        if not isinstance(sectors, list):
            raise ValidationError("Sectors must be a valid JSON array.")
        return sectors

