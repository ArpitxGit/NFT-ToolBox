import { readFileSync } from 'fs';
import { sdk } from './helpers.js';

async function main() {
  // Paste in the address from when you created the bundle collection module
  const bundleModuleAddress = '0xDA0935F3c1A82F4bC3bf98761F464DDbf54f7F36';
  const bundleModule = sdk.getBundleModule(bundleModuleAddress);

  console.log('Creating NFT batch...');

  const created = await bundleModule.createAndMintBatch([
    {
      metadata: {
        name: 'The Greatest Libero',
        description: 'dungexn!',
        image: readFileSync('./assets/gracia-dharma-qTlbO6mkQH0-unsplash.jpg'),
        properties: {
          rarity: 'a bit rare',
          fanciness: 7,
        }
      },
      supply: 50,
    },
    {
      metadata: {
        name: 'The Ghost',
        description: 'dungexn!',
        image: readFileSync('./assets/samuel-berner-kcvEQb7GXZc-unsplash.jpg'),
        properties: {
          rarity: 'a bit rare',
          fanciness: 7,
        }
      },
      supply: 50,
    },
    {
      metadata: {
        name: 'The Greatest Duo, But Solo Goku Claps Anyone! ',
        description: 'dungexn!',
        image: readFileSync('./assets/jeet-dhanoa-q82BAzAWGTQ-unsplash.jpg'),
        properties: {
          rarity: 'super rare!',
          fanciness: 10,
        }
      },
      supply: 10,
    }
  ]);

  console.log('NFTs created!')
  console.log(JSON.stringify(created, null, 2));
}

try {
  await main();
} catch (error) {
  console.error("Error minting the NFTs", error);
  process.exit(1);
}