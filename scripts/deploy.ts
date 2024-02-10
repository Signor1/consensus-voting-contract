import { ethers } from "hardhat";

async function main() {

  const vote = await ethers.deployContract("ConsensusVoting");

  await vote.waitForDeployment();

  console.log(
    `Contract deployed to ${vote.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
