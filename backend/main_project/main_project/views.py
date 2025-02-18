from django.http import HttpResponse

def welcome_view(request):
    return HttpResponse("Welcome to Tan Project! We're glad you're here.")
 
