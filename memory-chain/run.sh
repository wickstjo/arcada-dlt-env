# IMPORT SETTINGS
source settings.conf

# RUN CONTAINER
clear && sudo docker run -it -p ${HOST_PORT}:8888 ${CONTAINER_NAME}