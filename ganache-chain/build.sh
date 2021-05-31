# CONTAINER NAME
CONTAINER_NAME="ganache-chain"

# BUILD THE CONTAINER
clear && sudo docker build docker/ -t ${CONTAINER_NAME}