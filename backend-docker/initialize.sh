#!/bin/bash
# This script initializes the Django project. It will be executed (from 
# supervisord) every time the Docker image is run.

# Initialize Django project
python3.6 /code/django_docker/manage.py syncdb --noinput
python3.6 /code/django_docker/manage.py makemigrations
python3.6 /code/django_docker/manage.py migrate --noinput

# Create a Django superuser named `admin` if it doesn't yet exist
echo "Creating Django superuser"
echo "from ConfigParser import SafeConfigParser; parser = SafeConfigParser(); parser.read('/code/config.ini'); from django.contrib.auth.models import User; print('Admin user already exists') if User.objects.filter(username=parser.get('general', 'USERNAME')) else User.objects.create_superuser(parser.get('general', 'USERNAME'), 'admin@example.com', parser.get('general', 'PASSWORD'))" | python3.6 /code/django_docker/manage.py shell
