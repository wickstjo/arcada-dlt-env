## Ganache Blockchain
[Ganache](https://github.com/trufflesuite/ganache-cli) is a NodeJS **in-memory blockchain** that closely simulates the behaviour of a proper proof-of-work blockchain. While nothing can replace the real deal, this is an excellent tool for learning how blockchain technology works and to experiment with concepts on a smaller scale before  eventually transitioning to using a [Geth Blockchain](https://github.com/wickstjo/arcada-dlt-env/tree/master/geth-chain). Transactions on ganache do not have to be mined in the traditional sense, so there is virtually **no downtime or latency** for writing new data onto the blockchain.

By default, your blockchain will be available on **Port 8545**.

## Public- and Private Keys
As the name implies, the public key is your public identity on the blockchain network. To create **transactions** for that public key, you need to know the corresponding private key for the encryption process that will be detailed in the [web3 examples](https://github.com/wickstjo/arcada-dlt-env/tree/master/web3-notebooks).

By default, ganache generates ten new random accounts every time the process is launched, but since we’re passing the **--deterministic** flag in the [Dockerfile](https://github.com/wickstjo/arcada-dlt-env/blob/master/geth-chain/docker/dockerfile), the below listed ten **public and private keys** will always be generated with **100 ETH** each.

##### Public Keys:
```
(0) 0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1
(1) 0xFFcf8FDEE72ac11b5c542428B35EEF5769C409f0 (locked)
(2) 0x22d491Bde2303f2f43325b2108D26f1eAbA1e32b (locked)
(3) 0xE11BA2b4D45Eaed5996Cd0823791E0C93114882d (locked)
(4) 0xd03ea8624C8C5987235048901fB614fDcA89b117 (locked)
(5) 0x95cED938F7991cd0dFcb48F0a06a40FA1aF46EBC (locked)
(6) 0x3E5e9111Ae8eB78Fe1CC3bb8915d5D461F3Ef9A9 (locked)
(7) 0x28a8746e75304c0780E011BEd21C72cD78cd535E (locked)
(8) 0xACa94ef8bD5ffEE41947b4585a84BdA5a3d3DA6E (locked)
(9) 0x1dF62f291b2E969fB0849d99D9Ce41e2F137006e (locked)
```

##### Private Keys:
```
(0) 0x4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d
(1) 0x6cbed15c793ce57650b9877cf6fa156fbef513c4e6134f022a85b1ffdd59b2a1
(2) 0x6370fd033278c143179d81c5526140625662b8daa446c22ee2d73db3707e620c
(3) 0x646f1ce2fdad0e6deeeb5c7e8e5543bdde65e86029e2fd9fc169899c440a7913
(4) 0xadd53f9a7e588d003326d1cbf9e4a43c061aadd9bc938c843a79e7b4fd2ad743
(5) 0x395df67f0c2d2d9fe1ad08d1bc8b6627011959b79c53d7dd6a3536a33ab8a4fd
(6) 0xe485d098507f54e7733a205420dfddbe58db035fa577fc294ebd14db90767a52
(7) 0xa453611d9419d0e56f499079478fd72c37b251a94bfde4d19872c44cf65386e3
(8) 0x829e924fdf021ba3dbbc4225edfece9aca04b929d6e75613329ca6f1d31c0bb4
(9) 0xb0057716d5917badaf911b193b12b910811c1497b5bada8d7711f758981c3773
```
