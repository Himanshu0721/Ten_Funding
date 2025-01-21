from rest_framework import serializers
from .models import Registration, spotlight, launchpad, tech_stack_waitlist, vc_application

class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Registration
        fields = '__all__'

    def validate_stages(self, value):
        if not isinstance(value, list):
            raise serializers.ValidationError("Stages must be a JSON array.")
        return value

    def validate_sectors(self, value):
        if not isinstance(value, list):
            raise serializers.ValidationError("Sectors must be a JSON array.")
        return value

class SpotlightSerializer(serializers.ModelSerializer):
    class Meta:
        model = spotlight
        fields = '__all__'

class LaunchpadSerializer(serializers.ModelSerializer):
    class Meta:
        model = launchpad
        fields = '__all__'

class TechStackWaitlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = tech_stack_waitlist
        fields = '__all__'

class VCApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = vc_application
        fields = '__all__'
