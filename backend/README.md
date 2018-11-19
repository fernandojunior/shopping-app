# Store Backend

## Requirements

- Linux
- Python 3.5+
- Virtualenv

## Installation

Run the following to create a virtualenv and install pip requirements:
```sh
make env && make install
```

## Usage

First sync the database (sqlite) based on the models/migrations for the first time:
```sh
make migrate
```

Now, create an initial user named admin with a password of password123.

```sh
. .env/bin/activate && python manage.py createsuperuser --email admin@example.com --username admin
```

To run the REST API service:
```sh
make run
```
To access the browsable API, open the url `http://127.0.0.1:8000/api-auth/login/?next=/`
in the browser to login with the admin username.

To test the server:
```sh
make test
```

To check the source code lint (PEP8) using flake8 and pylint:
```sh
make lint
```

For more information, run `make help`.

## Author

- Fernando Felix do Nascimento Junior
