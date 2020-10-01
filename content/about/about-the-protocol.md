<slim-column>

# About the Protocol


The Secret Network is a blockchain protocol that gives developers ability to use private or sensitive data. This makes it easy for developers to build new types of solutions (Secret Apps) that protect data privacy while greatly increasing usability. These improvements are critical for achieving mass adoption of privacy-first, decentralized applications.

> This is a high-level overview of how Secret Network functions. For a more in-depth description, check out our full [documentation](https://build.scrt.network) for developers and node operators.

# How Secret Works
---------------------------------------

Essentially, Secret Network offers a platform to build censorship-resistant applications that keep data encrypted. Rather than letting specific organizations manage private data, Secret relies on a decentralized network of secure processors. Every node operator is equipped with specialized hardware that allows them to run code inside secure enclaves - also known as Trusted Execution Environments, or TEEs. Nobody, including device administrators, can access the raw information being decrypted and processed.

###  Secret Network, Step by Step:

1.  User sends encrypted input to network
2.  Validators (secret nodes) perform computations over encrypted data
3.  Proposing validator submits encrypted output
4.  Validators achieve consensus on the results
5.  Encrypted outputs and encrypted contract state are recorded on Secret Network

Secret contract functionality is based on [CosmWasm](https://www.cosmwasm.com) (a smart contracting platform) running inside TEEs operated by the secret nodes on the network. [WebAssembly](https://webassembly.org) (the “Wasm” part of CosmWasm) allows code written in various languages to run securely on a blockchain. Enigma and other members of the Secret Network community are working in parallel with the CosmWasm dev team and making valuable contributions. Building on their hard work, we are developing a module named `compute`, designed to enable secure data processing.

> If you want to build your own Secret App, check out our full [documentation](https://build.scrt.network) , which includes a secret contract development guide and other useful resources.

# Secret Contracts and Use Cases
-------------------------------------------------------------------

Decentralized technologies need privacy at their core in order to be secure and usable. Secret contracts (smart contracts on Secret Network) utilize encrypted inputs, encrypted outputs and encrypted state. This greatly improves usability of existing blockchain applications and expands the scope of products that can be built on public blockchains.

Below we highlight some existing use cases for which Secret Network can provide clear performance, security, and usability advantages:

###  Access Control / Digital Content Management

Used for monetization of digital content in decentralized web, such applications would store a decryption key (secret) to the content in the encrypted secret contract state, and when users make the required payment (triggering event), the secret contract will share a decryption key (secret) that is unique to each user. This use-case is not possible to build in the traditional blockchain networks as all data in state is publicly visible.

###  Secret Auctions and Secret Voting

These related use cases involve replacing the inefficient, two-step “commit-reveal” schemes with a better approach, which relies on secret contract functionality. Both secret auctions and secret voting would allow the users to submit their encrypted bids/votes and the secret contract can compute on encrypted inputs to determine the winner(s), without requiring the users to reveal bids or votes.

###  Decentralized Finance

Imagine an open, global economy with more accessible financial services, e.g. savings, lending, trading, insurance, and more! On Secret Network, DeFi customers maintain privacy while interacting with a permissionless economic system that creates new opportunities for wealth.

# Secret Network and the Cosmos Ecosystem
-------------------------------------------------------------------------------------

Secret Network is based on [Cosmos SDK](https://cosmos.network/sdk) and [Tendermint consensus](https://tendermint.com/core) . Generally, Cosmos represents a unique approach to developing scalable, interoperable blockchains. The inter-blockchain communication ([IBC](https://cosmos.network/ibc) ) protocol supports transmission of information across a network of blockchains. Through IBC, application-specific “zones” and “hubs” can leverage Secret Network by using its distributed network of Secret Nodes for privacy-preserving computations.

> Learn how our “Secret Hub” fits into the Cosmos Ecosystem on the [Secret Blog](https://blog.scrt.network/secret-hub) .



</slim-column>