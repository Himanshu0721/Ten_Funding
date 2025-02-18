from django.urls import path
from . import views
from .views import RegistrationView, SpotlightListView,LaunchpadListView,TechStackWaitlistListView,VCApplicationListView,AdminLoginView

urlpatterns = [
    path('csrf-token/', views.csrf_token),
    path('api/submit-form/', RegistrationView.as_view(), name='submit-form'),
    path('api/spotlight/', SpotlightListView.as_view(), name='spotlight-list'),
    path('api/launchpad/', LaunchpadListView.as_view(), name='launchpad-list'),
    path('api/tech-stack-waitlist/', TechStackWaitlistListView.as_view(), name='tech-stack-waitlist-list'),
    path('api/vc-application/', VCApplicationListView.as_view(), name='vc-application-list'),
    # path('api/admin-login/', AdminLoginView.as_view(), name='admin-login'),

]
