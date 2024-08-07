const hre = require("hardhat");

async function main() {
  // Avalanche Fuji
  // Change contract address when switching networks
  const contractAddress = "0x9F827527C92B298a086f2f4850363E66BE9a84b8";
  const myContract = await hre.ethers.getContractAt("ProgrammableDefensiveTokenTransfers", contractAddress);
  
  // Change destionation chain when switching networks
  const txAddChain = await myContract.allowlistDestinationChain(_destinationChainSelector='16015286601757825753', allowed=true);
  console.log("Tx hash:", txAddChain.hash);
}

// Execute the main function and handle potential errors
main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Error during setting up contract:", err);
    process.exit(1);
  });

