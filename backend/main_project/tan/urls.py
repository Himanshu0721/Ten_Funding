from django.urls import path
from . import views
from .views import form_view, history_view
from .views import FundingListView, IndiaVCListView, SpotlightListView,LaunchpadListView,TechStackWaitlistListView,VCApplicationListView

urlpatterns = [
    path('contact/', views.contact_form, name='contact'),
    path('form/', form_view, name='form_view'),
    path('history/', history_view, name='history_view'),
    # path('', views.india_vc_form),
    # path('spotlight', views.spotlights),
    # path('launchpad', views.launchpads),
    # path('tech_stack_waitlist', views.tech_stack_waitlists),
    # path('next_india', views.next_india),
    # path('vc_application', views.vc_applications),
    path('csrf-token/', views.csrf_token),
    path('api/funding/', FundingListView.as_view(), name='funding-list'),
    path('api/india-vc/', IndiaVCListView.as_view(), name='india-vc-list'),
    path('api/spotlight/', SpotlightListView.as_view(), name='spotlight-list'),
    path('api/launchpad/', LaunchpadListView.as_view(), name='launchpad-list'),
    path('api/tech-stack-waitlist/', TechStackWaitlistListView.as_view(), name='tech-stack-waitlist-list'),
    path('api/vc-application/', VCApplicationListView.as_view(), name='vc-application-list'),
]
