import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'SlayerDeploymentV4',
  tokenName: 'PigslayerNFT',
  tokenSymbol: 'PSNFT',
  hiddenMetadataUri: 'ipfs://Qmf7ebz5iFczQKmi1paPA8dbCUnbco6zieWcfhsYBGr2JH/1.json',
  maxSupply: 10000,
  whitelistSale: {
    price: 0.05,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.03,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.06,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0x8116befaE276A72fE2044F7a353340cE69adB237",
  marketplaceIdentifier: 'pigslayernft',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
