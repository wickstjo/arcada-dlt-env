## Web3 with Jupyter Notebooks (Python)
<p style="text-align: justify;">
<a href="#">Jupyter Notebooks</a> are an efficient method of developing python applications. You can install temporary libraries directly in a notebook cell, but can also install them permanently by including them in the <a href="#">dockerfile</a> and rebuilding the container. The docker container mounts the <b>projects/</b> directory so your notebooks aren’t deleted once the container is terminated.
</p>

## Dependencies
<p style="text-align: justify;">
Before starting with this repository, make sure that you have a functional <a href="#">blockchain environment</a> running, and that you've compiled and uploaded the relevant <a href="#">smart contracts</a> there. Once that is done, run the <a href="#">fetch-binary.sh</a> script to copy over the produced <a href="#">binary.json</a> file to the example directory.
</p>

## Web3 Library
<p style="text-align: justify;">
<a href="#">The Web3 library</a> is what allows the Python application to communicate with blockchain smart contracts through a gateway. It comes automatically installed with the container. However, many of the library methods are quite convoluted, particularly for beginners, so I wrote the <a href="#">blockchain.ipynb</a> notebook to clarify the process of serializing a smart contract instance as well as reading existing and writing new data to the blockchain.
</p>

## Signing Transactions
<p style="text-align: justify;">
Since the blockchain’s accounts are locked, transactions need to be signed using a public key’s corresponding private key in order to be considered valid. To simplify the signing process for the example project, these keys are listed in the <a href="#">settings.json</a> file. Note that in a production scenario you should be using a more secure methodology for achieving this.
</p>