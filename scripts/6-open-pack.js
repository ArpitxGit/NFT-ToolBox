import { sdk } from "./helpers.js";

async function main() {
  const packModuleAddress = '0x7E1d0be5D67E14991868a27a6A954E0d51483F9a';
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