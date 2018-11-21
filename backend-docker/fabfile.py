import os
import time
from fabric.api import *
from fabric.contrib.files import *
from ConfigParser import SafeConfigParser
parser = SafeConfigParser()
parser.read(os.path.join(os.path.dirname(__file__), 'config.ini'))


# Configure server admin login credentials
env.password = parser.get('general', 'PASSWORD')

# Deploy production server
@hosts(parser.get('general', 'USERNAME') + '@' + parser.get('production', 'HOST'))
def deploy_production():
    start_time = time.time();
    print('Building Docker image...')
    local('docker build -t %s .' % parser.get('general', 'DOCKER_IMAGE_NAME'))
    print('Pushing image to Docker Hub...')
    local('docker push %s' % parser.get('general', 'DOCKER_IMAGE_NAME'))
    print('Removing any existing Docker containers on the production host...')
    run('if [ "$(docker ps -qa)" != "" ]; then docker rm --force `docker ps -qa`; fi')
    run('docker ps')
    print('Removing dangling Docker images...')
    run('if [ -z "$(docker images -f "dangling=true" -q)" ]; then echo "no images to remove";  else docker rmi $(docker images -f "dangling=true" -q); fi')
    print('Pulling image on production host...')
    run('docker pull %s ' % parser.get('general', 'DOCKER_IMAGE_NAME'));
    print('Running image on production host...')
    run_command = '''docker run \
    -d \
    -p 80:80 \
    -p 443:443 \
    --env DJANGO_PRODUCTION=true \
    --env PASSWORD={PASSWORD} \
    {DOCKER_IMAGE_NAME}'''.format(
        PASSWORD=parser.get('general', 'PASSWORD'),
        DOCKER_IMAGE_NAME=parser.get('general', 'DOCKER_IMAGE_NAME'),
    )
    run(run_command);
    print('-' * 80)
    print(parser.get('general', 'DOCKER_IMAGE_NAME') + ' successfully deployed to ' + parser.get('production', 'HOST'))
    print("Deployment time: %s seconds" % (time.time() - start_time))
