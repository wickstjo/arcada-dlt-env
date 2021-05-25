# IMPORT SETTINGS
source settings.conf

# RUN CONTAINER WITH A VIRTUAL DRIVE
clear && sudo docker run -it -p ${HOST_PORT}:8888 -v `pwd`/resources:/resources ${CONTAINER_NAME}