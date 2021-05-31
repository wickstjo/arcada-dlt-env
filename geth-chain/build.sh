# CONTAINER NAME
CONTAINER_NAME="geth-chain"

# BUILD THE CONTAINER
clear && sudo docker build docker/ -t ${CONTAINER_NAME}