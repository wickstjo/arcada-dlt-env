# IMPORT SETTINGS
source settings.conf

# BUILD THE CONTAINER
clear && sudo docker build docker/ -t ${CONTAINER_NAME}