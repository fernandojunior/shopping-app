.PHONY: clean
 
help:
	@echo 'Usage: make [command]'
	@echo 'Commands:'
	@echo '  env              Create a virtual development environment for Python.'
	@echo '  install          Install dependencies into virtualenv.'
	@echo '  migrate          Sync the database for the first time.'
	@echo '  makemigrations   Create new migrations based on the changes detected to your models.'
	@echo '  run              Start the django server.'
	@echo '  flake8           Check code style using flake8 and pylint.'
	@echo '  flake8           Check code style using flake8.'
	@echo '  pylint           Check code style using pylint.'
	@echo '  test             Run tests.'
	@echo '  build            Build a distribution package with setuptools.'
	@echo '  clean            Remove all Python, test and build artifacts.'
	@echo '  clean-build      Remove build artifacts.'
	@echo '  clean-pyc        Remove Python file artifacts.'

build:
	python setup.py egg_info sdist bdist_wheel
	ls -l dist

clean: clean-build clean-pyc

clean-build:
	rm -fr build/
	rm -fr dist/
	rm -fr .eggs/
	find . -name '*.egg-info' -exec rm -fr {} +
	find . -name '*.egg' -exec rm -f {} +

clean-pyc:
	find . -name '*.pyc' -exec rm -f {} +
	find . -name '*.pyo' -exec rm -f {} +
	find . -name '*~' -exec rm -f {} +
	find . -name '__pycache__' -exec rm -fr {} +

env:
	sudo apt-get -y install python3-pip
	sudo pip3 install virtualenv
	virtualenv .env

install:
	test -f requirements.txt && \
		. .env/bin/activate && pip install -r requirements.txt \
		|| echo "requirements.txt doesn't exists"

lint: flake8 pylint

flake8:
	. .env/bin/activate && flake8 --show-source --count

pylint:
	. .env/bin/activate && pylint api app --load-plugins pylint_django --disable=missing-docstring,too-few-public-methods,too-many-ancestors,no-member

test:
	. .env/bin/activate && python manage.py test

run:
	. .env/bin/activate && python manage.py runserver

migrate:
	. .env/bin/activate && python manage.py migrate

makemigrations:
	. .env/bin/activate && python manage.py makemigrations
