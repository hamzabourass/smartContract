// scripts/deploy_forwarder.js
const { ethers } = require("hardhat");

async function main() {
  const Forwarder = await ethers.getContractFactory("Forwarder");
  const forwarder = await Forwarder.deploy();

  await forwarder.deployed();

  console.log("Forwarder deployed to:", forwarder.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
