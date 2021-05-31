# CONTAINER NAME
CONTAINER_NAME="geth-chain"

# RUN CONTAINER WITH A VIRTUAL DRIVE
clear && sudo docker run -it --network host ${CONTAINER_NAME}