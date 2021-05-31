# CONTAINER NAME
CONTAINER_NAME="web3-notebooks"

# RUN CONTAINER
clear && sudo docker run -it --network host -v `pwd`/projects:/projects ${CONTAINER_NAME}