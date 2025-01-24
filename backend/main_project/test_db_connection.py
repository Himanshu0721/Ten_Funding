import os
import psycopg2
from django.conf import settings

# Set the settings module
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'main_project.settings')  # Replace 'your_project_name' with the name of your project

try:
    conn = psycopg2.connect(
        dbname=settings.DATABASES['default']['NAME'],
        user=settings.DATABASES['default']['USER'],
        password=settings.DATABASES['default']['PASSWORD'],
        host=settings.DATABASES['default']['HOST'],
        port=settings.DATABASES['default']['PORT'],
        sslmode='require'  # Use SSL for Render DB
    )
    print("Database connection successful!")
except Exception as e:
    print("Database connection failed!")
    print(e)
