# IMPORT SETTINGS
source settings.conf

# RUN CONTAINER WITH A VIRTUAL DRIVE
clear && sudo docker run -it --network host ${CONTAINER_NAME}

# RUN WITH A PERMANENT VIRTUAL DRIVE
# clear && sudo docker run -it --network host -v `pwd`/resources:/resources ${CONTAINER_NAME}

# RUN WITH ONLY PORT FORWARDING
# clear && sudo docker run -it -p ${HOST_PORT}:8545 ${CONTAINER_NAME}