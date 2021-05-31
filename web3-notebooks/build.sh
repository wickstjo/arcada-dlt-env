# CONTAINER NAME
CONTAINER_NAME="web3-notebooks"

# BUILD THE CONTAINER
clear && sudo docker build docker/ -t ${CONTAINER_NAME}