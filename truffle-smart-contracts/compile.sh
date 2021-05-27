# IMPORT SETTINGS
source settings.conf

# RUN CONTAINER
clear && sudo docker run -t --network host -v `pwd`/projects/${PROJECT_DIR}:/project ${CONTAINER_NAME}