const hre = require("hardhat");

async function main() {
  // Ethereum Sepolia
  // Change contract address when switching networks
  const contractAddress = "0xa84CE138be2F2f03EDa2742AaE07C5fa97f982e2";
  const myContract = await hre.ethers.getContractAt("ProgrammableDefensiveTokenTransfers", contractAddress);
  
  // Change source chain when switching networks
  const txAddChain = await myContract.allowlistSourceChain(_sourceChainSelector='14767482510784806043', allowed=true);
  console.log("Adding source chain. Tx hash:", txAddChain.hash);

  // Change sender when switching networks - sender is the contract from another network
  const txAddSender = await myContract.allowlistSender(_sender='0x9F827527C92B298a086f2f4850363E66BE9a84b8', allowed=true);
  console.log("Adding sender contract. Tx hash:", txAddSender.hash);

  // To simulate a problem :)
  const txSetSimRevert = await myContract.setSimRevert(simRevert=true);
  console.log("Adding a problem. Tx hash:", txSetSimRevert.hash);
}

// Execute the main function and handle potential errors
main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Error during setting up contract:", err);
    process.exit(1);
  });

