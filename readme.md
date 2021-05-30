## Arcada DLT Environments
This repository contains a number of useful **Docker environments** for developing full-stack distributed applications using **Ethereum Blockchain** technology. In addition to install and startup instructions, the subdirectories also contain **example projects** that should give you a fair idea of how the different systems are interlinked and can communicate.

## Dependencies
The only dependency for any of these environments is [Docker](https://www.docker.com/).

## Container Management
Each subdirectory has a **build** and **run** shell file that can be used to create and launch (respectively) a container with recommended settings. For ease-of-use, the containers launch in **interactive mode** and use **port masking** that makes each environment available through the host machine's port.

Due to Docker’s non-permanent nature, when a project has **dynamic assets** like Jupyter Notebooks, the container will mount a **virtual directory** instead. The docker container will then have access to an external directory, and the progress you make will not be lost once the container is terminated.

## Example Projects
Since many of the example projects **build upon each other** and simply don’t work unless a previous step has been fulfilled, I advise you to complete them in the below listed order. If a step has multiple options, only one of them needs to be completed and the simplest option is marked as such. The next example project **assumes that you only completed the simplest option** for the previous step.

**Step 1: Set up your own development blockchain**
- [ganache-chain/](https://github.com/wickstjo/arcada-dlt-env/tree/master/ganache-chain) (simple)
- [geth-chain/](https://github.com/wickstjo/arcada-dlt-env/tree/master/geth-chain)

**Step 2: Write, compile and upload smart contracts to the blockchain**
- [truffle-contracts/projects/example/](https://github.com/wickstjo/arcada-dlt-env/tree/master/truffle-contracts)

**Step 3: Utilize your smart contracts from a frontend application**
- [web3-notebooks/projects/example/](https://github.com/wickstjo/arcada-dlt-env/tree/master/web3-notebooks) (simple)
- [web3-react/projects/example/](https://github.com/wickstjo/arcada-dlt-env/tree/master/web3-react)