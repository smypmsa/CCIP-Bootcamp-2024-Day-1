require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "ethereum_sepolia",
  networks: {
    ethereum_sepolia: {
      url: process.env.CHAINSTACK_ETHEREUM_SEPOLIA_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
    avalanche_fuji: {
      url: process.env.CHAINSTACK_AVALANCHE_FUJI_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
    arbitrum_sepolia: {
      url: process.env.CHAINSTACK_ARBITRUM_SEPOLIA_URL,
      accounts: [process.env.PRIVATE_KEY],
    }
  },
  solidity: "0.8.19",
};
