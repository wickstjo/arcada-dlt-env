# NUKE OLD BUILD
clear && rm -rf build/

# MIGRATE SMART CONTRACTS
truffle migrate --network development

# DISTRIBUTE UNIFIED ABI FILE TO OTHER REPOS
python3 ../resources/clean-up.py

# CLEAN UP
rm -rf build/