import { sdk } from "./helpers.js";

async function main() {
  const packModuleAddress = '0x0A93C4F5313C7b12643F882b11645505A71200fE';
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