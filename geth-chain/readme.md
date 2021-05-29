## Geth Blockchain
<p style="text-align: justify;">
<a href="#">Geth</a> (Go-Ethereum) is the client that all Ethereum nodes use to interact with numerous available blockchains. With this tool, you can synchronize and use any main- or testnet, but also instantiate and run your own private blockchain that works the same way the Ethereum mainnet does. This means that transactions need to be mined which can sometimes take a while. For development purposes, you might want to create a <a href="#">Ganache-chain</a> instead since transaction have virtually no downtime or latency.
</p>

## Resources and Initial Boot
<p style="text-align: justify;">
The docker container copies over the source files of a pre-built private blockchain located in the <a href="#">resources directory</a> but they can be replaced with your own source files. When the blockchain is first booted, I would advise you to wait until the client <b>finishes generating a DAG</b> which is when the message stops being spammed in the terminal.
</p>

## Accounts
<p style="text-align: justify;">
With Geth, <b>keypairs</b> are derived from an <b>encrypted key-file</b>. The key-files for each of the below listed public- and private keys can be found in the <a href="#">keystore directory</a>. To create more accounts, you need to use the geth console while inside the container. To serialize usable keypairs from the keystore directory, use the <a href="#">serialize_keystore.py</a> script.
</p>

##### Public Keys:
```
(0) 0x0255d655D38eC62C4E2829DB658F882AEa6108a0
(1) 0x1ecC18DC2c41B6A5cC760dEdeBb0D857223A5721 (locked)
(2) 0xa1EfD69AB1D27703B8688Afb23b2aD416387C4A7 (locked)
```

##### Private Keys:
```
(0) 0xbd394fbf42c81cfe75a2c6d1c59fd4bd8c2c15255ab480b0280a8d0c369298ce
(1) 0x6593a2cb7d09054c12be41dc9854c4b93e006f29fb6f6abf30de48342436025c
(2) 0x87b179dd8d7da45849256c4ef85717e12b9556b1652862f1565c86f1400404b4
```