"""
WSGI config for tan_project project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.1/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

# Set the settings module based on the environment variable 'RENDER_EXTERNAL_HOSTNAME'
settings_module = 'main_project.deployment_settings' if 'RENDER_EXTERNAL_HOSTNAME' in os.environ else 'main_project.settings'

os.environ.setdefault('DJANGO_SETTINGS_MODULE', settings_module)

# os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'main_project.settings')

application = get_wsgi_application()
