from django.shortcuts import render

# Create your views here.

from .forms import ContactForm

# In tan/views.py (or a common views file)
from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to the homepage!")


def contact_form(request):
    if request.method == "POST":
        form = ContactForm(request.POST)
        if form.is_valid():
            # Process the form data
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            message = form.cleaned_data['message']
            user = TanFunding.objects.create(name=name,email=email,message = message)
            user.save()
            return render(request, 'form_success.html', {'name': name})
    if request.method == 'GET':
        form = ContactForm()
        return render(request, 'form_page.html', {'form': form})

from django.shortcuts import render
from .models import TanFunding
from django.http import HttpResponseRedirect

def form_view(request):
    if request.method == "POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')

        # Save the form data to the history model
        TanFunding.objects.create(name=name, email=email, message=message)
        return HttpResponseRedirect('/thanks/')  # Redirect after saving
    return render(request, 'form_template.html')

def history_view(request):
    history = TanFunding.objects.all().order_by('-submitted_at')  # Latest first
    return render(request, 'history_template.html', {'history': history})



