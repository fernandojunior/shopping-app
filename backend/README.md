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

To sync the database for the first time:
```sh
make migrate
```

To run the server:
```sh
make run
```

To test the server:
```sh
make test
```

To check the source code lint (PEP8):
```sh
make flake8 # or
make pylint
```

## Author

- Fernando Felix do Nascimento Junior