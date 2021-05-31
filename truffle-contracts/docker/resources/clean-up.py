import os
import json

# THE PATH TO THE BINARY INTERFACES
# NOTE THAT THIS PATH REFLECTS THE DOCKER CONTAINER
path = '../project/build/contracts/'

# FIND ALL CONTRACT ABI'S, THEN REMOVE MIGRATIONS
files = os.listdir(path)
files.remove('Migrations.json')

# OPEN JSON FILE
def load_json(path):
    with open(path) as json_file:
        return json.load(json_file)

# CONTAINER FOR DATA
container = {}

# LOOP THROUGH THE FILES
for file in files:
    
    # EXTRACT THE FILENAME & OPEN THE JSON FILE
    header = file[0:-5].lower()
    content = load_json(path + file)
    
    # EXTRACT THE NETWORK OPTIONS
    network_list = list(content['networks'].keys())
    
    # IF THE CONTRACT DOES NOT HAVE AN ADDRESS
    if len(network_list) == 0:
        address = 'undefined'
    
    # IF IT DOES, EXTRACT IT
    else:
        address = content['networks'][network_list[0]]['address']
    
    # INDEX THE ADDRESS & ABI UNDER THE FILENAME
    container[header] = {
        'address': address,
        'abi': content['abi'] 
    }

# SAVE DICT AS JSON FILE
def save_json(data, path):
    with open(path, 'w') as outfile:
        json.dump(data, outfile)

# SAVE THE CONTAINER AT ROOT
save_json(container, 'binary.json')