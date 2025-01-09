from rest_framework import serializers
from .models import funding, india_vc, spotlight, launchpad, tech_stack_waitlist, vc_application

class FundingSerializer(serializers.ModelSerializer):
    class Meta:
        model = funding
        fields = '__all__'

class IndiaVCSerializer(serializers.ModelSerializer):
    class Meta:
        model = india_vc
        fields = '__all__'

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
