# IMPORT SETTINGS
source settings.conf

# RUN CONTAINER WITH A VIRTUAL DRIVE
clear && sudo docker run -it --network host ${CONTAINER_NAME}