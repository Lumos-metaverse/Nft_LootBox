import { sdk } from "./helpers.js";

async function main() {
  const packModuleAddress = '0xAFEb95CED8873306Cd00EB07134c31CFaE7f30c1';
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log('Opening the pack...');
  const opened = await packModule.open('0');
  console.log('Opened the pack!');
  console.log(opened);
}

try {
  await main();
} catch (error) {
  console.error("Error opening the pack", error);
  process.exit(1);
}