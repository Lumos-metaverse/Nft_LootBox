import { ethers } from "ethers";
import { sdk } from "./helpers.js";

async function main() {
  const packModuleAddress = '0xAFEb95CED8873306Cd00EB07134c31CFaE7f30c1'; // your pack module address
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log('Depositing link...')

  // LINK uses 18 decimals, same as Eth. So this gives us the amount to use for 2 LINK
  const amount = ethers.utils.parseEther('2');

  await packModule.depositLink(amount);
  console.log('Deposited!')

  const balance = await packModule.getLinkBalance();
  console.log(balance);
}

try {
  await main();
} catch (error) {
  console.error("Error depositing the LINK", error);
  process.exit(1);
}