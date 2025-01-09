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
            first_name = form.cleaned_data['first_name']
            last_name = form.cleaned_data['last_name']
            title = form.cleaned_data['title']
            company = form.cleaned_data['company']
            company_name_for_emails = form.cleaned_data['company_name_for_emails']
            email = form.cleaned_data['email']
            phone = form.cleaned_data['phone']
            employees = form.cleaned_data['employees']
            industry = form.cleaned_data['industry']
            keywords = form.cleaned_data['keywords']
            person_linkedin_url = form.cleaned_data['person_linkedin_url']
            website = form.cleaned_data['website']
            company_linkedin_url = form.cleaned_data['company_linkedin_url']
            facebook_url = form.cleaned_data['facebook_url']
            twitter_url = form.cleaned_data['twitter_url']
            city = form.cleaned_data['city']
            state = form.cleaned_data['state']
            country = form.cleaned_data['country']
            company_address = form.cleaned_data['company_address']
            company_city = form.cleaned_data['company_city']
            company_state = form.cleaned_data['company_state']
            company_country = form.cleaned_data['company_country']
            company_phone = form.cleaned_data['company_phone']
            seo_description = form.cleaned_data['seo_description']
            annual_revenue = form.cleaned_data['annual_revenue']
            total_funding = form.cleaned_data['total_funding']
            latest_funding = form.cleaned_data['latest_funding']
            latest_funding_amount = form.cleaned_data['latest_funding_amount']
            last_raised_at = form.cleaned_data['last_raised_at']
            # email = form.cleaned_data['email']

            user = funding.objects.create(first_name=first_name,last_name=last_name,title=title,company=company,company_name_for_emails=company_name_for_emails,
                                email=email,phone=phone,employees=employees,industry=industry,keywords=keywords,person_linkedin_url=person_linkedin_url,website=website,
                                company_linkedin_url=company_linkedin_url,facebook_url=facebook_url,twitter_url=twitter_url,city=city,state=state,country=country,
                                company_address=company_address,company_city=company_city,company_state=company_state,company_country=company_country,company_phone=company_phone,
                                seo_description=seo_description,annual_revenue=annual_revenue,total_funding=total_funding,latest_funding=latest_funding,
                                latest_funding_amount=latest_funding_amount,last_raised_at=last_raised_at)
            user.save()
            return render(request, 'form_success.html', {'name': first_name})
    if request.method == 'GET':
        form = ContactForm()
        return render(request, 'form_page.html', {'form': form})

from django.shortcuts import render,redirect
from .models import funding,india_vc,launchpad,spotlight,tech_stack_waitlist,vc_application
from django.http import HttpResponseRedirect
from django.http import JsonResponse
from django.middleware.csrf import get_token

def csrf_token(request):
    return JsonResponse({'csrfToken': get_token(request)})

def form_view(request):
    if request.method == "POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')

        # Save the form data to the history model
        funding.objects.create(first_name="",last_name="",title="",company="",company_name_for_emails="",
                                email="",phone="",employees="",industry="",keywords="",person_linkedin_url="",website="",
                                company_linkedin_url="",facebook_url="",twitter_url="",city="",state="",
                                company_address="",company_city="",company_state="",company_country="",company_phone="",
                                seo_description="",annual_revenue="",total_funding="",latest_Funding="",
                                latest_Funding_amount="",last_raised_at="")
        return HttpResponseRedirect('/thanks/')  # Redirect after saving
    return render(request, 'form_template.html')

def history_view(request):
    history = funding.objects.all().order_by('-submitted_at')  # Latest first
    return render(request, 'history_template.html', {'history': history})

def india_vc_form(request):
    context = {}
    if request.method == "POST":
        uname = request.POST['uname']
        firm_name = request.POST['firm_name']
        uemail = request.POST['email']
        founder_year = request.POST['founder_year']
        ticket_size = request.POST['ticket_size']
        current_fund_size = request.POST['current_fund_size']
        aum = request.POST['aum']
        portfolio_count = request.POST['portfolio_count']
        portfolio_companies = request.POST['portfolio_companies']
        prefer_lead_rounds = request.POST['prefer_lead_rounds']
        
        stage_focus_pre_seed = request.POST['stage_focus_pre_seed']
        stage_focus_seed = request.POST['stage_focus_seed']
        stage_focus_series_a = request.POST['stage_focus_series_a']
        stage_focus_series_b = request.POST['stage_focus_series_b']
        stage_focus_series_c = request.POST['stage_focus_series_c']
        stage_focus_debt = request.POST['stage_focus_debt']
        sector_focus_ai_ml = request.POST['sector_focus_ai_ml']
        sector_focus_ar_vr = request.POST['sector_focus_ar_vr']
        sector_focus_agritech_food = request.POST['sector_focus_agritech_food']
        sector_focus_biotech_life_sciences = request.POST['sector_focus_biotech_life_sciences']
        sector_focus_climate_sustainability = request.POST['sector_focus_climate_sustainability']
        sector_focus_consumer = request.POST['sector_focus_consumer']
        sector_focus_crypto_blockchain = request.POST['sector_focus_crypto_blockchain']
        sector_focus_deep_tech = request.POST['sector_focus_deep_tech']
        sector_focus_education = request.POST['sector_focus_education']
        sector_focus_enterprise = request.POST['sector_focus_enterprise']
        sector_focus_media_entertainment = request.POST['sector_focus_media_entertainment']
        sector_focus_fintech = request.POST['sector_focus_fintech']
        sector_focus_gaming = request.POST['sector_focus_gaming']
        sector_focus_government_defence = request.POST['sector_focus_government_defence']
        sector_focus_health_wellness = request.POST['sector_focus_health_wellness']
        sector_focus_healthcare_medtech = request.POST['sector_focus_healthcare_medtech']
        sector_focus_industrial_iot_robotics = request.POST['sector_focus_industrial_iot_robotics']
        sector_focus_prop_tech_real_estate = request.POST['sector_focus_prop_tech_real_estate']
        sector_focus_saas_devops_marketplace = request.POST['sector_focus_saas_devops_marketplace']
        sector_focus_supply_chain_logistics = request.POST['sector_focus_supply_chain_logistics']
        sector_focus_travel_hospitality = request.POST['sector_focus_travel_hospitality']
        founder_preference_warm_intro = request.POST['founder_preference_warm_intro']
        founder_preference_twitter_dm = request.POST['founder_preference_twitter_dm']
        founder_preference_linkedin = request.POST['founder_preference_linkedin']
        founder_preference_investment_bankers = request.POST['founder_preference_investment_bankers']
        founder_preference_fund_application_form = request.POST['founder_preference_fund_application_form']
        founder_preference_cold_mail = request.POST['founder_preference_cold_mail']
        founder_preference_other = request.POST['founder_preference_other']
        founder_preference_other_name = request.POST['founder_preference_other_name']
        fund_application_form = request.POST['fund_application_form']
        poc_mail = request.POST['poc_mail']
        fund_overview = request.POST['fund_overview']

        if stage_focus_pre_seed=="" or stage_focus_seed=="" or stage_focus_series_a=="" or stage_focus_series_b=="" or stage_focus_series_c=="" or stage_focus_debt=="" or sector_focus_ai_ml=="" or sector_focus_ar_vr=="" or sector_focus_agritech_food=="" or sector_focus_biotech_life_sciences=="" or sector_focus_climate_sustainability=="" or sector_focus_consumer=="" or sector_focus_crypto_blockchain=="" or sector_focus_deep_tech=="" or sector_focus_education=="" or sector_focus_enterprise=="" or sector_focus_media_entertainment=="" or sector_focus_fintech=="" or sector_focus_gaming=="" or sector_focus_government_defence=="" or sector_focus_health_wellness=="" or sector_focus_healthcare_medtech=="" or sector_focus_industrial_iot_robotics=="" or sector_focus_prop_tech_real_estate=="" or sector_focus_saas_devops_marketplace=="" or sector_focus_supply_chain_logistics=="" or sector_focus_travel_hospitality=="" or founder_preference_warm_intro=="" or founder_preference_twitter_dm=="" or founder_preference_linkedin=="" or founder_preference_investment_bankers=="" or founder_preference_fund_application_form=="" or founder_preference_cold_mail=="" or founder_preference_other=="" :
            context['err_msg'] = "Fields cannot be empty"

        else:
        
            u=india_vc.objects.create(name=uname,firm_name=firm_name,email=uemail,founder_year=founder_year,ticket_size=ticket_size,current_fund_size=current_fund_size,aum=aum,
                                    portfolio_count=portfolio_count,portfolio_companies=portfolio_companies,prefer_lead_rounds=prefer_lead_rounds,
                                    stage_focus_pre_seed=stage_focus_pre_seed,stage_focus_seed=stage_focus_seed,stage_focus_series_a=stage_focus_series_a,
                                    stage_focus_series_b=stage_focus_series_b,stage_focus_series_c=stage_focus_series_c,stage_focus_debt=stage_focus_debt,
                                    sector_focus_ai_ml=sector_focus_ai_ml,sector_focus_ar_vr=sector_focus_ar_vr,sector_focus_agritech_food=sector_focus_agritech_food,
                                    sector_focus_biotech_life_sciences=sector_focus_biotech_life_sciences,sector_focus_climate_sustainability=sector_focus_climate_sustainability,
                                    sector_focus_consumer=sector_focus_consumer,sector_focus_crypto_blockchain=sector_focus_crypto_blockchain,sector_focus_deep_tech=sector_focus_deep_tech,
                                    sector_focus_education=sector_focus_education,sector_focus_enterprise=sector_focus_enterprise,  
                                    sector_focus_media_entertainment=sector_focus_media_entertainment,sector_focus_fintech=sector_focus_fintech,
                                    sector_focus_gaming=sector_focus_gaming,sector_focus_government_defence=sector_focus_government_defence,sector_focus_health_wellness=sector_focus_health_wellness,
                                    sector_focus_healthcare_medtech=sector_focus_healthcare_medtech,sector_focus_industrial_iot_robotics=sector_focus_industrial_iot_robotics,
                                    sector_focus_prop_tech_real_estate=sector_focus_prop_tech_real_estate,sector_focus_saas_devops_marketplace=sector_focus_saas_devops_marketplace,
                                    sector_focus_supply_chain_logistics=sector_focus_supply_chain_logistics,sector_focus_travel_hospitality=sector_focus_travel_hospitality,
                                    founder_preference_warm_intro=founder_preference_warm_intro,founder_preference_twitter_dm=founder_preference_twitter_dm,
                                    founder_preference_linkedin=founder_preference_linkedin,founder_preference_investment_bankers=founder_preference_investment_bankers,
                                    founder_preference_fund_application_form=founder_preference_fund_application_form,founder_preference_cold_mail=founder_preference_cold_mail,
                                    founder_preference_other=founder_preference_other,founder_preference_other_name=founder_preference_other_name,
                                    fund_application_form=fund_application_form,poc_mail=poc_mail,fund_overview=fund_overview
                                    )        
            u.save()
            inserted_id = u.id
            context['inserted_id'] = inserted_id
        return render(request, 'next_india.html',context)

    else:
        return render(request, 'india_vc_form.html')

def spotlights(request):
    context = {}
    if request.method == "POST":
        uname = request.POST['uname']
        email = request.POST['email']
        company_name = request.POST['company_name']

        if uname=="" or email=="" or company_name=="" :
            context['err_msg'] = "Fields cannot be empty"

        else:
            spot=spotlight.objects.create(name=uname,email=email,company_name=company_name)
            spot.save()

            context['success_msg']='Your Form is successfully submitted.'
        return render(request, 'spotlight.html',context)
    else:
        return render(request, 'spotlight.html')
    
def launchpads(request):
    context = {}
    if request.method == "POST":
        uname = request.POST['uname']
        firm_name = request.POST['firm_name']
        mail = request.POST['email']
        role_name = request.POST['role_name']
        role_type = request.POST['role_type']
        role_location = request.POST['role_location']
        about_job = request.POST['about_job']
        job_application_link = request.POST['job_application_link']
        interested_newsletter_story = request.POST['interested_newsletter_story']

        if uname=="" or firm_name=="" or mail=="" or role_name=="" or role_type=="" or role_location=="" or about_job=="" or job_application_link=="" or interested_newsletter_story=="":
            context['err_msg'] = "Fields cannot be empty"

        else:
            launch=launchpad.objects.create(name=uname,firm_name=firm_name,mail=mail,role_name=role_name,role_type=role_type,role_location=role_location,about_job=about_job,
                                            job_application_link=job_application_link,interested_newsletter_story=interested_newsletter_story
                                            )
            launch.save()

            context['success_msg']='Your Form is successfully submitted.'
        return render(request, 'launchpad.html',context)
    else:
        return render(request, 'launchpad.html')
    
def tech_stack_waitlists(request):
    context = {}
    if request.method == "POST":
        uname = request.POST['uname']
        email = request.POST['email']
        firm_name = request.POST['firm_name']
        interested_newsletter_story = request.POST['interested_newsletter_story']

        if uname=="" or email=="" or firm_name=="" or interested_newsletter_story=="":
            context['err_msg'] = "Fields cannot be empty"

        else:
            tech_stack=tech_stack_waitlist.objects.create(name=uname,email=email,firm_name=firm_name,interested_newsletter_story=interested_newsletter_story)
            tech_stack.save()

            context['success_msg']='Your Form is successfully submitted.'
        return render(request, 'tech_stack_waitlist.html',context)
    else:
        return render(request, 'tech_stack_waitlist.html')

def next_india(request):
    context = {}
    if request.method == "POST":
        inserted_id=request.POST['inserted_id']
        investment_process = request.POST['investment_process']
        turn_around_time = request.POST['turn_around_time']
        fund_preferences = request.POST['fund_preferences']
        other_remarks = request.POST['other_remarks']
        interested_newsletter = request.POST['interested_newsletter']

        if investment_process=="" or turn_around_time=="" or fund_preferences=="" or other_remarks=="" or interested_newsletter=="":
            context['err_msg'] = "Fields cannot be empty"

        else:
            ind=india_vc.objects.filter(id=inserted_id).update(investment_process=investment_process,turn_around_time=turn_around_time,fund_preferences=fund_preferences,
                                                            other_remarks=other_remarks,interested_newsletter=interested_newsletter
                                                            )



            context['success_msg']='Your Form is successfully submitted.'
        return render(request, 'india_vc_form.html',context)
    else:
        return render(request, 'next_india.html')

def vc_applications(request):
    context = {}
    if request.method == "POST":
        mail_address = request.POST['mail_address']
        start_up_name = request.POST['start_up_name']
        business_description = request.POST['business_description']
        founders_linkedin_profiles = request.POST['founders_linkedin_profiles']
        product_website = request.POST['product_website']
        funding_amount = request.POST['funding_amount']
        pitch_deck = request.POST['pitch_deck']

        if mail_address=="" or start_up_name=="" or business_description=="" or founders_linkedin_profiles=="" or product_website=="" or funding_amount=="" or pitch_deck=="":
            context['err_msg'] = "Fields cannot be empty"

        else:
            vc=vc_application.objects.create(mail_address=mail_address,start_up_name=start_up_name,business_description=business_description,
                                                 founders_linkedin_profiles=founders_linkedin_profiles,product_website=product_website,
                                                 funding_amount=funding_amount,pitch_deck=pitch_deck)
            vc.save()

            context['success_msg']='Your Form is successfully submitted.'
        return render(request, 'vc_application.html',context)
    else:
        return render(request, 'vc_application.html')



