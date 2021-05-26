# IMPORT SETTINGS
source settings.conf

# RUN CONTAINER
clear && sudo docker run -it --network host ${CONTAINER_NAME}

# RUN WITH ONLY PORT FORWARDING
# clear && sudo docker run -it -p ${HOST_PORT}:8545 ${CONTAINER_NAME}