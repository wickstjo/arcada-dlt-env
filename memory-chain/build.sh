# IMPORT SETTINGS
source settings.conf

# BUILD THE CONTAINER
clear && sudo docker build . -t ${CONTAINER_NAME}