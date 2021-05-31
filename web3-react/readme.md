## Web3.js with React (JavaScript)
[React](https://reactjs.org/) is a JavaScript framework that is developed and maintained by Facebook. It is intended for web applications, but there are daughter frameworks like [Electron](https://github.com/electron/electron) and [React Native](https://github.com/facebook/react-native) that can be used to create desktop and mobile applications respectively.

By default, your web application will be available on **Port 3000**.

## Dependencies
Before starting with this repository, make sure that you have a functional [blockchain environment](https://github.com/wickstjo/arcada-dlt-env/tree/master/ganache-chain) running, and that you've compiled and uploaded the relevant [smart contracts](https://github.com/wickstjo/arcada-dlt-env/tree/master/truffle-contracts) there. Once that is done, run the [fetch-binary.sh](https://github.com/wickstjo/arcada-dlt-env/blob/master/web3-react/fetch-binary.sh) script to copy over the produced [binary.json](https://github.com/wickstjo/arcada-dlt-env/blob/master/truffle-contracts/projects/example/binary.json) file to the example directory.

## Dynamic Assets
Since React applications have individual NodeJS dependencies that need to be installed, you can only mount one project directory per runtime. For example, to mount the [/projects/example/](https://github.com/wickstjo/arcada-dlt-env/blob/master/web3-react/projects/example) directory, pass “example” as an argument to the run script like this:
> ./run example

## Web3 Library
[The Web3 library](https://web3js.readthedocs.io/en/v1.3.4/) is what allows the JavaScript application to communicate with blockchain smart contracts through a gateway. It comes automatically installed with the container. However, many of the library methods are quite convoluted, particularly for beginners, so I wrote the [blockchain.js](https://github.com/wickstjo/arcada-dlt-env/blob/master/web3-react/projects/example/src/funcs/blockchain.js) file to clarify the process of serializing a smart contract instance as well as reading existing and writing new data to the blockchain.

## Signing Transactions
Since the blockchain’s accounts are locked, transactions need to be signed using a public key’s corresponding private key in order to be considered valid. To simplify the signing process for the example project, these keys are listed in the [settings.json](https://github.com/wickstjo/arcada-dlt-env/blob/master/web3-react/projects/example/src/resources/settings.json) file. Note that in a production scenario you should be using a more secure methodology for achieving this. One such alternative could be [Metamask](https://metamask.io/).