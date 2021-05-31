# CONTAINER NAME
CONTAINER_NAME="truffle-contracts"

# CHECK IF AN ARGUMENT WAS PASSED
if [ -z "$1" ]

    # PRINT ERROR
    then
        clear && echo "Error: You need to supply a project directory to mount."
    
    # RUN CONTAINER & MOUNT DIR
    else
        clear && sudo docker run -t --network host -v `pwd`/projects/$1:/project ${CONTAINER_NAME}
fi