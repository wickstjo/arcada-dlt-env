## Truffle Framework
[Truffle](https://github.com/trufflesuite/truffle) is a framework that compiles and uploads **Ethereum Smart Contracts** to different blockchain environments. Running the container compiles and uploads the smart contracts from the specified project directory and creates a unified ABI file at the root. For a less systematic methodology, consider using [Remix](https://remix.ethereum.org/).

## Dependencies
Before starting with this repository, make sure that you have a functional [blockchain environment](https://github.com/wickstjo/arcada-dlt-env/tree/master/ganache-chain) running that Truffle can interact with.

## The Solidity Language
The smart contracts for this repository are written in a programming language called [Solidity](https://github.com/ethereum/solidity), which is very similar to **JavaScript**. Due to the intentional simplicity of smart contracts, solidity is very easy to comprehend for anyone with some kind of programming background. Regardless, if you’re more comfortable with **Lisp** or **Python**, smart contracts can also be written in [LLL](https://lll-docs.readthedocs.io/en/latest/lll_introduction.html#:~:text=LLL%20is%20one%20of%20the,level%20language%20similar%20to%20Assembly.) or [Vyper](https://github.com/vyperlang/vyper).

## Truffle Configuration
At the root of every project there needs to be a file called [truffle-config.js](https://github.com/wickstjo/arcada-dlt-env/blob/master/truffle-contracts/projects/example/truffle-config.js) that functions as the process **instructions** for Truffle. Among other things, this file needs to accurately detail where the blockchain is hosted and what compiler version should be used.

## Post Processing
When a smart contract is compiled, the compiler produces an **Application Binary Interface** (ABI) file which in this case is in JSON format. When a smart contract is uploaded to the blockchain, it is assigned a **permanent address**. To interact with a smart contract, you need an address and the corresponding ABI to know **where** the contract is, and **how** to interact with it.

To streamline the usage of multi-contract projects, the [clean-up.py](https://github.com/wickstjo/arcada-dlt-env/blob/master/truffle-contracts/docker/resources/clean-up.py) script is automatically run after compiling and uploading your smart contracts. The clean-up process essentially combines multiple ABI files into one as well as attaching assigned addresses to the corresponding ABI. The produced file is called the [binary.json](https://github.com/wickstjo/arcada-dlt-env/blob/master/truffle-contracts/projects/example/binary.json) and is placed at the project’s root directory. From there it can be distributed to frontend projects that need it.