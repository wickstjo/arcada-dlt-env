## Web3.js with React (JavaScript)
<p style="text-align: justify;">
<a href="#">React</a> is a JavaScript framework that is developed and maintained by Facebook. It is intended for web applications, but there are daughter frameworks like <a href="#">Electron</a> and <a href="#">React Native</a> that can be used to create desktop and mobile applications respectively.
</p>
<p style="text-align: justify;">
Due to the clunkiness of the node package manager, you need to specify which project directory you want the docker container to mount in the <a href="#">settings.conf</a> file. Since we’re creating a dynamic development environment, project specific modules cannot be pre-installed when the docker container is built, and we instead have to do it every time we run the container. If this becomes too annoying, consider installing this environment on your machine instead.
</p>

## Dependencies
<p style="text-align: justify;">
Before starting with this repository, make sure that you have a functional <a href="#">blockchain environment</a> running, and that you've compiled and uploaded the relevant <a href="#">smart contracts</a> there. Once that is done, run the <a href="#">fetch-binary.sh</a> script to copy over the produced <a href="#">binary.json</a> file to the example directory.
</p>

## Web3 Library
<p style="text-align: justify;">
<a href="#">The Web3 library</a> is what allows the JavaScript application to communicate with blockchain smart contracts through a gateway. It comes automatically installed with the container. However, many of the library methods are quite convoluted, particularly for beginners, so I wrote the <a href="#">blockchain.ipynb</a> notebook to clarify the process of serializing a smart contract instance as well as reading existing and writing new data to the blockchain.
</p>

## Signing Transactions
<p style="text-align: justify;">
Since the blockchain’s accounts are locked, transactions need to be signed using a public key’s corresponding private key in order to be considered valid. To simplify the signing process for the example project, these keys are listed in the <a href="#">settings.json</a> file. Note that in a production scenario you should be using a more secure methodology for achieving this. One such alternative could be <a href="#">Metamask</a>.
</p>