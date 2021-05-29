## Truffle Framework
<p style="text-align: justify;">
<a href="#">Truffle</a> is a framework that compiles and uploads <b>Ethereum Smart Contracts</b> to different blockchain environments. Running the container compiles and uploads the smart contracts from the specified project directory and creates a unified ABI file at the root. For a less systematic methodology, consider using <a href="https://remix.ethereum.org/">Remix</a>.
</p>

## Dependencies
<p style="text-align: justify;">
Before starting with this repository, make sure that you have a functional <a href="#">blockchain environment</a> running that Truffle can interact with.
</p>

## The Solidity Language
<p style="text-align: justify;">
The smart contracts for this repository are written in a programming language called <a href="#">Solidity</a>, which is very similar to <b>JavaScript</b>. Due to the intentional simplicity of smart contracts, solidity is very easy to comprehend for anyone with some kind of programming background. Regardless, if you’re more comfortable with <b>Lisp</b> or <b>Python</b>, smart contracts can also be written in <a href="#">LLL</a> or <a href="#">Vyper</a>.
</p>

## Truffle Configuration
<p style="text-align: justify;">
At the root of every project there needs to be a file called <a href="#">truffle-config.js</a> that functions as the process <b>instructions</b> for Truffle. Among other things, this file needs to accurately detail where the blockchain is hosted and what compiler version should be used.
</p>

## Post Processing
<p style="text-align: justify;">
When a smart contract is compiled, the compiler produces an <b>Application Binary Interface</b> (ABI) file which in this case is in JSON format. When a smart contract is uploaded to the blockchain, it is assigned a <b>permanent address</b>. To interact with a smart contract, you need an address and the corresponding ABI to know <b>where</b> the contract is, and <b>how</b> to interact with it.
</p>

<p style="text-align: justify;">
To streamline the usage of multi-contract projects, the <a href="#">clean-up.py</a> script is automatically run after compiling and uploading your smart contracts. The clean-up process essentially combines multiple ABI files into one as well as attaching assigned addresses to the corresponding ABI. The produced file is called the <a href="#">binary.json</a> and is placed at the project’s root directory. From there it can be distributed to frontend projects that need it.
</p>