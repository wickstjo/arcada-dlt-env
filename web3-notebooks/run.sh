# IMPORT SETTINGS
source settings.conf

# RUN CONTAINER
clear && sudo docker run -it --network host -v `pwd`/projects:/projects ${CONTAINER_NAME}