#!pip3 install web3
from web3 import Web3
import os

# CREATE WEB3 INSTANCE
web3_instance = Web3(Web3.WebsocketProvider('ws://127.0.0.1:8546'))

# ENCRYPTION PASSWORD
password = 'pass'

# SERIALIZE KEYFILE TO PRIVATE KEY
def serialize_file(key_file):
    with open('keystore/' + key_file) as keyfile:
        encrypted_key = keyfile.read()

        # SERIALIZE PRIVATE KEY
        raw_private_key = web3_instance.eth.account.decrypt(encrypted_key, password)
        private_key = web3_instance.toHex(raw_private_key)

        # SERIALIZE PUBLIC KEY
        raw_public_key = key_file[-40:]
        public_key = web3_instance.toChecksumAddress(raw_public_key)

        # PRINT DATA
        print('\nKEY FILE:\t\t', key_file)
        print('PUBLIC KEY:\t\t', public_key)
        print('PRIVATE KEY:\t\t', private_key)

# KEYSTORE FILES IN ASCENDING ORDER
files = os.listdir('keystore/')
files.sort()

# LOOP THROUGH & SERIALIZE EACH FILE
for key_file in files:
    serialize_file(key_file)