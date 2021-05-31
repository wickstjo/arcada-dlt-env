## Truffle Framework
[Truffle](https://github.com/trufflesuite/truffle) is a NodeJS framework that compiles and uploads **Ethereum Smart Contracts** to different blockchain environments. Running the container compiles and uploads the smart contracts in a specific project directory and creates a unified ABI file at the root. For a less systematic methodology, consider using [Remix](https://remix.ethereum.org/).

## Dependencies
Before starting with this repository, make sure that you have a functional [blockchain environment](https://github.com/wickstjo/arcada-dlt-env/tree/master/ganache-chain) running that Truffle can interact with.

## The Solidity Language
Smart contracts can be written in many programming languages since they ultimately get compiled down to bytecode. In this environment, smart contracts are written in a language called [Solidity](https://github.com/ethereum/solidity) which is very syntactically similar to **JavaScript**. If you’re more comfortable with **Lisp** or **Python**, smart contracts can also be written in [LLL](https://lll-docs.readthedocs.io/en/latest/lll_introduction.html#:~:text=LLL%20is%20one%20of%20the,level%20language%20similar%20to%20Assembly.) or [Vyper](https://github.com/vyperlang/vyper).

## Truffle Configuration
At the root of every project directory there needs to be a [truffle-config.js](https://github.com/wickstjo/arcada-dlt-env/blob/master/truffle-contracts/projects/example/truffle-config.js) file that functions as the compile and upload **instructions** for Truffle. There you need to specify your blockchain details, the solidity compiler settings and a list of smart contracts that should be uploaded. As a **rule of thumb**, all smart contracts without a constructor method should be included in this list.

## Dynamic Assets
Since it only makes sense to compile and upload one set of smart contracts per runtime, this container needs to be given a specific project directory to work with. For example, to mount the [/projects/example/](https://github.com/wickstjo/arcada-dlt-env/blob/master/truffle-contracts/projects/example) directory, pass “example” as an argument to the run script like this:
> ./run example

## Post Processing
When a smart contract is compiled, the compiler produces an **Application Binary Interface** (ABI) file which in this case is in JSON format. When a smart contract is uploaded to the blockchain, it is assigned a **permanent address**. To interact with a smart contract, you need an address and the corresponding ABI to know **where** the contract is, and **how** to interact with it.

To streamline the usage of multi-contract projects, the [clean-up.py](https://github.com/wickstjo/arcada-dlt-env/blob/master/truffle-contracts/docker/resources/clean-up.py) script is automatically run after compiling and uploading your smart contracts. The clean-up process essentially combines multiple ABI files into one as well as attaching assigned addresses to the corresponding ABI. The produced file is called the [binary.json](https://github.com/wickstjo/arcada-dlt-env/blob/master/truffle-contracts/projects/example/binary.json) and is placed at the project’s root directory. From there it can be distributed to frontend projects that need it.