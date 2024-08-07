const hre = require("hardhat");

async function main() {
  // Ethereum Sepolia
  // Change contract address when switching networks
  const contractAddress = "0xa84CE138be2F2f03EDa2742AaE07C5fa97f982e2";
  const myContract = await hre.ethers.getContractAt("ProgrammableDefensiveTokenTransfers", contractAddress);
  
  const failedMsg = await myContract.getFailedMessages(offset='0', limit='1');
  console.log(failedMsg);

  const lastMsg = await myContract.getLastReceivedMessageDetails();
  console.log(lastMsg);
}

// Execute the main function and handle potential errors
main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Error:", err);
    process.exit(1);
  });

