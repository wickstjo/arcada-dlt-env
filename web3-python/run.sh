# IMPORT SETTINGS
source settings.conf

# RUN CONTAINER
clear && sudo docker run -it --network host -v `pwd`/notebooks:/notebooks ${CONTAINER_NAME}

# RUN WITH PORT FORWARDING
# clear && sudo docker run -it -p ${HOST_PORT}:8888 -v `pwd`/notebooks:/notebooks ${CONTAINER_NAME}