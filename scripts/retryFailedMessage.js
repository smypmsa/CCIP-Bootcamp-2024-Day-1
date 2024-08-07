const hre = require("hardhat");

async function main() {
  // Ethereum Sepolia
  // Change contract address when switching networks
  const contractAddress = "0xa84CE138be2F2f03EDa2742AaE07C5fa97f982e2";
  const myContract = await hre.ethers.getContractAt("ProgrammableDefensiveTokenTransfers", contractAddress);
  
  // Retry failed message
  const txSetSimRevert = await myContract.retryFailedMessage(
    messageId='0xbab7b58cb359593e334c59e05cfbb2398697a32c0385315085b7cfc9735babc9',
    tokenReceiver='0xD0538aF11467cD80b141eA14CECA4BC25433b158'
  );
  
  console.log("Recovering locked tokens. Tx hash:", txSetSimRevert.hash);
}

// Execute the main function and handle potential errors
main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Error during setting up contract:", err);
    process.exit(1);
  });

