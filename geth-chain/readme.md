## Geth Blockchain
[Geth](https://geth.ethereum.org/) (Go-Ethereum) is the client that all Ethereum nodes use to interact with numerous available blockchains. With this tool, you can synchronize and use any main- or testnet, but also instantiate and run your own private blockchain that works the same way the Ethereum mainnet does. This means that transactions need to be mined which can sometimes take a while. For development purposes, you might want to create a [Ganache-chain](https://github.com/wickstjo/arcada-dlt-env/tree/master/ganache-chain) instead since transaction have virtually no downtime or latency.

## Resources and Initial Boot
The docker container copies over the source files of a pre-built private blockchain located in the [resources directory](https://github.com/wickstjo/arcada-dlt-env/tree/master/geth-chain/docker/resources) but they can also be replaced with your own source files. When the blockchain is first booted, I would advise you to wait until the client finishes **generating a DAG** which is when the message stops being spammed in the terminal.

## Accounts
With Geth, **keypairs** are derived from an **encrypted key-file**. The key-files for each of the below listed public- and private keys can be found in the [keystore directory](https://github.com/wickstjo/arcada-dlt-env/tree/master/geth-chain/docker/resources/keystore). To create more accounts, you need to use the geth console while inside the container. To serialize usable keypairs from the keystore directory, you can use the [serialize_keystore.py](https://github.com/wickstjo/arcada-dlt-env/blob/master/geth-chain/docker/resources/serialize_keystore.py) script.

**Public Keys:**
```
(0) 0x0255d655D38eC62C4E2829DB658F882AEa6108a0
(1) 0x1ecC18DC2c41B6A5cC760dEdeBb0D857223A5721 (locked)
(2) 0xa1EfD69AB1D27703B8688Afb23b2aD416387C4A7 (locked)
```

**Private Keys:**
```
(0) 0xbd394fbf42c81cfe75a2c6d1c59fd4bd8c2c15255ab480b0280a8d0c369298ce
(1) 0x6593a2cb7d09054c12be41dc9854c4b93e006f29fb6f6abf30de48342436025c
(2) 0x87b179dd8d7da45849256c4ef85717e12b9556b1652862f1565c86f1400404b4
```