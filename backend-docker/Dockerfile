# https://gist.github.com/monkut/c4c07059444fd06f3f8661e13ccac619
FROM ubuntu:16.04

ARG DEBIAN_FRONTEND=noninteractive
# Enable production settings by default; for development, this can be set to 
# `false` in `docker run --env`
ENV DJANGO_PRODUCTION=true

# Install packages
RUN apt-get update
RUN apt-get install --assume-yes apt-utils
RUN apt-get install -y git nginx supervisor vim

RUN apt-get install -y software-properties-common
RUN add-apt-repository ppa:jonathonf/python-3.6
RUN apt-get update -y
RUN apt-get install -y build-essential python3.6 python3.6-dev python3-pip
RUN python3.6 -m pip install pip --upgrade
RUN python3.6 -m pip install wheel

# Handle urllib3 InsecurePlatformWarning
RUN apt-get install -y libffi-dev libssl-dev libpython3.6-dev
RUN pip3 install urllib3[security] requests[security] ndg-httpsclient pyasn1

# Configure Django project
ADD . /code
RUN mkdir /djangomedia
RUN mkdir /static
RUN mkdir /logs
RUN mkdir /logs/nginx
RUN mkdir /logs/gunicorn
WORKDIR /code
RUN pip install -r requirements.txt
RUN chmod ug+x /code/initialize.sh

# Expose ports
# 80 = Nginx
# 8000 = Gunicorn
EXPOSE 80 8000 3306

# Configure Nginx
RUN ln -s /code/nginx.conf /etc/nginx/sites-enabled/django_docker.conf
RUN rm /etc/nginx/sites-enabled/default

# Run Supervisor (i.e., start Nginx, and Gunicorn)
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf
CMD ["/usr/bin/supervisord"]
