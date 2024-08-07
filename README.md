# CCIP Bootcamp Day 1 Exercises

This repository contains the exercises from the [CCIP Bootcamp Day 1](https://cll-devrel.gitbook.io/ccip-bootcamp/day-1/welcome-to-ccip-bootcamp) implemented using Hardhat.

## Overview

Chainlink CCIP (Cross-Chain Interoperability Protocol) is the industry-leading cross-chain protocol providing defense-in-depth security for decentralized applications. This bootcamp is designed to help you get hands-on experience with CCIP, understanding how to deploy and interact with contracts across different blockchain networks.

### Exercise Details

In these exercises, you will deploy a set of contracts to different blockchain test networks:

- **Sender Contract**: Deployed to Avalanche Fuji.
- **Receiver Contract**: Deployed to Ethereum Sepolia.

### Prerequisites

Before getting started, make sure you have the following installed:

- [Node.js](https://nodejs.org/) v16.x or later
- [Hardhat](https://hardhat.org/) v2.0 or later
- [Metamask](https://metamask.io/) or any Web3-compatible wallet
- Basic understanding of Solidity and Ethereum smart contracts

### Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/ccip-bootcamp-day1.git
   cd ccip-bootcamp-day1
   ```

2. **Install Dependencies**

   Navigate to the project directory and run:

   ```bash
   npm install
   ```

3. **Configure Environment Variables**

   Create a `.env` file in the project root and add the following environment variables:

   ```plaintext
   AVALANCHE_FUJI_RPC_URL=<your-avalanche-fuji-rpc-url>
   SEPOLIA_RPC_URL=<your-sepolia-rpc-url>
   PRIVATE_KEY=<your-wallet-private-key>
   ```

   Make sure you replace the placeholders with your actual RPC URLs and private key. You can create account on [Chainstack](https://chainstack.com/) and get required nodes. 

4. **Deploy Contracts**

   Deploy the sender contract to Avalanche Fuji and the receiver contract to Ethereum Sepolia:

   ```bash
   npx hardhat run scripts/deploySender.js --network avalancheFuji
   npx hardhat run scripts/deployReceiver.js --network sepolia
   ```

   The deployment scripts are located in the `scripts` folder and assume you've configured Hardhat networks in `hardhat.config.js`.

### Useful Links

- [Avalanche Fuji Explorer](https://testnet.snowtrace.io/)
- [Ethereum Sepolia Explorer](https://sepolia.etherscan.io/)
- [Chainlink CCIP Documentation](https://ccip.chain.link/)
- [Chainlink Faucets](https://faucets.chain.link/)

### License

This project is licensed under the MIT License.
