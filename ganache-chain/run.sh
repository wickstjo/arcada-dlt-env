# IMPORT SETTINGS
source settings.conf

# RUN CONTAINER
clear && sudo docker run -it --network host ${CONTAINER_NAME}