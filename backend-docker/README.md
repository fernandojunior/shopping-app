# Store docker deployment

## Requirements
- Linux
- Docker
- Docker Machine
- Fabric

## Configure the project

Project settings live in `config.ini`. Edit `config.ini`:

* `USERNAME`: this is the username for a Django superuser.
* `PASSWORD`: this is the password for a Django superuser.

Run `docker ps` to make sure your Docker host is running. If it's not, run:

    $ docker-machine start mydockerhost
    $ eval "$(docker-machine env mydockerhost)"

Build the Docker image (you should be in the `django-docker/` directory, which contains the `Dockerfile`):

    $ docker build -t store-app/django-docker .

Run the Docker image you just created (the command will be explained in the `Development` section below):

    $ docker run -d -p 80:80 -v $(pwd):/code --env DJANGO_PRODUCTION=false store-app/django-docker

Run `docker ps` to verify that the Docker container is running:

    CONTAINER ID        IMAGE                      COMMAND                  CREATED             STATUS              PORTS                          NAMES
    2830610e8c87        store-app/django-docker   "/usr/bin/supervisord"   25 seconds ago      Up 25 seconds       0.0.0.0:80->80/tcp, 8000/tcp   focused_banach

You should now be able to access the running app through a web browser. Run `docker-machine ls` to get the local IP address for your Docker host:

    NAME           ACTIVE   DRIVER       STATE     URL                         SWARM
    mydockerhost   *        virtualbox   Running   tcp://192.168.99.100:2376

Open `http://192.168.99.100` (or your host's address, if it's different) in a browser. You should see the store browsable api.

Grab the `CONTAINER ID` from the `docker ps` output above, and use `docker kill` to stop the container:

    $ docker kill 2830610e8c87

## Development

You should be inside the `django-docker` folder, which contains the `Dockerfile` and this README.

Here's the outline of the workflow:

    1. Run the Docker container and mount the local directory containing the Django project code
    2. Test the container

Start the Docker container:

    $ docker run -d -p 80:80 -v $(pwd):/code --env DJANGO_PRODUCTION=false store-app/django-docker

Here's what the flags do:

* `-d`: Run in detached mode (i.e., Docker will no longer listen to the console where you ran `docker run`).
* `-p 80:80`: Map port 80 on the host to port 80 on the container. This lets you communicate with Nginx from your browser.
* `-v $(pwd):/code`: Mount the current directory as a volume at `/code` on the Docker container. This lets you edit the code while the container is running so you can test it without having to rebuild the image.
* `--env DJANGO_PRODUCTION=false`: Production settings are not enabled.

Point your browser to your Docker host's IP address. You should see the the store browsable api again.

Point your browser to `http://<ip address>/api-auth/login/?next=/`. You should be able to log in with username `admin` and the root password you set in `config.ini`.

## Production

    $ fab deploy_production

You now have a dockerized Django project running on a production server.

## Reference
- https://github.com/morninj/django-docker
