const hre = require("hardhat");

async function main() {
  // Avalanche Fuji
  // Change contract address when switching networks
  const contractAddress = "0x9F827527C92B298a086f2f4850363E66BE9a84b8";
  const myContract = await hre.ethers.getContractAt("ProgrammableDefensiveTokenTransfers", contractAddress);
  
  // Change destionation chain when switching networks
  const txSendMsg = await myContract.sendMessagePayLINK(
    _destinationChainSelector='16015286601757825753',
    // _receiver='0xa84CE138be2F2f03EDa2742AaE07C5fa97f982e2', // Ethereum Sepolia contract
    _receiver='0xD0538aF11467cD80b141eA14CECA4BC25433b158', // EOA
    _text='Hello World!',
    _token='0xD21341536c5cF5EB1bcb58f6723cE26e8D8E90e4', // CCIP-BnM
    _amoount='1000000000000000' // 0.001
  );

  console.log("Tx hash:", txSendMsg.hash);
}

// Execute the main function and handle potential errors
main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Error during sending message:", err);
    process.exit(1);
  });

