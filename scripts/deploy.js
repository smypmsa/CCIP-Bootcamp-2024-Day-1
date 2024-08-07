const hre = require("hardhat");

async function main() {
  // Retrieve the deployer account from the list of signers
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Load the contract factory from the contracts folder
  const CcipContract = await hre.ethers.getContractFactory("ProgrammableDefensiveTokenTransfers");

  // Deploy the contract and wait for it to be mined
  // Router contract address, LINK contract address - change them when switching networks
  const deployedContract = await CcipContract.deploy("0x0BF3dE8c5D3e8A2B34D2BEeB17ABfCeBaf363A59", "0x779877A7B0D9E8603169DdbD7836e478b4624789");
  await deployedContract.deployed();

  // Output the contract address and transaction hash once deployed
  console.log("Contract deployed at address:", deployedContract.address);
  console.log("Tx hash:", deployedContract.deployTransaction.hash);
}

// Execute the main function and handle potential errors
main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Error during deployment:", err);
    process.exit(1);
  });
