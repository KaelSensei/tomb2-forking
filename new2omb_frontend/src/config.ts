import { Configuration } from './tomb-finance/config';
import { BankInfo } from './tomb-finance';

const configurations: { [env: string]: Configuration } = {
  production: {
    chainId: 42161,
    networkName: 'Arbitrum One mainnet',
    etherscanUrl: 'https://arbiscan.io',
    defaultProvider: 'https://arb1.arbitrum.io/rpc',
    deployments: require('./tomb-finance/deployments/deployments.mainnet.json'),
    externalTokens: {
      WETH: ['0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', 18],
      USDC: ['0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8', 6],
      wETH: ['0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', 18],
      'ARBOMB-WETH LP': ['0x1dE807C94D1637be2267A937fd5aB07a16c30579', 18],
      'ARBSHARE-WETH LP': ['0x082a88164A4c06076a844AB120716EB3925908F2', 18],
      ARBSHARE: ['0x9664E90eb98Be3671E940e42aFdEd1B56c364185', 18],
      'USDC-ETH-LP': ['0x84652bb2539513BAf36e225c930Fdd8eaa63CE27', 18],
      'ARBOMB-ETH-LP': ['0x1dE807C94D1637be2267A937fd5aB07a16c30579', 18],
      'ARBSHARE-ETH-LP': ['0x082a88164A4c06076a844AB120716EB3925908F2', 18],
      'ARBOMB-ARB-LP': ['0x1dE807C94D1637be2267A937fd5aB07a16c30579', 18],
      'ARBSHARE-ARB-LP': ['0x082a88164A4c06076a844AB120716EB3925908F2', 18],
      'ARBOMB-USDC-LP': ['0x1dE807C94D1637be2267A937fd5aB07a16c30579', 18],
      'ARBSHARE-USDC-LP': ['0x082a88164A4c06076a844AB120716EB3925908F2', 18],
    },
    baseLaunchDate: new Date('2021-06-02 13:00:00Z'),
    bondLaunchesAt: new Date('2020-12-03T15:00:00Z'),
    masonryLaunchesAt: new Date('2020-12-11T00:00:00Z'),
    refreshInterval: 10000,
  },
};

export const bankDefinitions: { [contractName: string]: BankInfo } = {
  /*
  Explanation:
  name: description of the card
  poolId: the poolId assigned in the contract
  sectionInUI: way to distinguish in which of the 3 pool groups it should be listed
        - 0 = Single asset stake pools
        - 1 = LP asset staking rewarding ARBOMB
        - 2 = LP asset staking rewarding ARBSHARE
  contract: the contract name which will be loaded from the deployment.environmnet.json
  depositTokenName : the name of the token to be deposited
  earnTokenName: the rewarded token
  finished: will disable the pool on the UI if set to true
  sort: the order of the pool
  */
  TombWrappedEthRewardPool: {
    name: 'Earn ARBOMB by staking WETH',
    poolId: 0,
    sectionInUI: 0,
    contract: 'TombWrappedEthRewardPool',
    depositTokenName: 'wETH',
    earnTokenName: 'ARBOMB',
    finished: false,
    multiplier: '500x',
    site: 'https://fantom.foundation',
    buyLink: 'https://app.camelot.exchange',
    sort: 7,
    closedForStaking: true,
  },
  TombEthLPTombRewardPool: {
    name: 'Earn TOMB by TOMB-ETH LP',
    poolId: 0,
    sectionInUI: 1,
    contract: 'TombEthLpTombRewardPool',
    depositTokenName: 'ARBOMB-ETH-LP',
    earnTokenName: 'TOMB',
    finished: false,
    multiplier: '0',
    buyLink: 'https://app.camelot.exchange',
    site: '',
    sort: 7,
    closedForStaking: true,
  },
  TombEthLPTShareRewardPool: {
    name: 'Earn ARBSHARE by ARBOMB | ETH',
    poolId: 1,
    sectionInUI: 2,
    contract: 'TombEthLPTShareRewardPool',
    depositTokenName: 'ARBOMB-WETH LP',
    earnTokenName: 'ARBSHARE',
    finished: false,
    multiplier: '35500x',
    buyLink: 'https://app.camelot.exchange',
    site: '/',
    sort: 8,
    closedForStaking: false,
  },
  TshareEthLPTShareRewardPool: {
    name: 'Earn ARBSHARE by ARBSHARE-WETH LP',
    poolId: 0,
    sectionInUI: 2,
    contract: 'TshareEthLPTShareRewardPool',
    depositTokenName: 'ARBSHARE-WETH LP',
    earnTokenName: 'ARBSHARE',
    finished: false,
    multiplier: '24000x',
    buyLink: 'https://app.camelot.exchange/',
    site: '/',
    sort: 9,
    closedForStaking: false,
  },
  WETHRebates: {
    name: 'Bond WETH, earn ARBOMB',
    poolId: 0,
    sectionInUI: 3,
    contract: 'TombEthRewardPool',
    depositTokenName: 'WETH',
    earnTokenName: 'ARBOMB',
    finished: false,
    multiplier: '15000x',
    buyLink: '',
    site: '',
    sort: 6,
    closedForStaking: false,
  },
  // USDCRebates: {
  //    name: 'Bond USDC, earn ARBOMB',
  //    poolId: 1,
  //    sectionInUI: 3,
  //    contract: 'TombEthRewardPool',
  //    depositTokenName: 'USDC',
  //    earnTokenName: 'ARBOMB',
  //    finished: false,
  //    multiplier: '15000x',
  //    buyLink: '',
  //    site: '',
  //    sort: 6,
  //    closedForStaking: false,
  // },
  // Tomb3OMBETHRebates: {
  //   name: 'Bond ARBOMB-WETH LP, earn ARBOMB',
  //   poolId: 3,
  //   sectionInUI: 3,
  //   contract: 'TombEthRewardPool',
  //   depositTokenName: 'ARBOMB-WETH LP',
  //   earnTokenName: 'ARBOMB',
  //   finished: false,
  //   multiplier: '6000x',
  //   buyLink: '',
  //   site: '',
  //   sort: 1,
  //   closedForStaking: false,
  // },
  Tomb3SHARESRebates: {
    name: 'Bond ARBSHARE, earn ARBOMB',
    poolId: 4,
    sectionInUI: 3,
    contract: 'TombEthRewardPool',
    depositTokenName: 'ARBSHARE',
    earnTokenName: 'ARBOMB',
    finished: false,
    multiplier: '5000x',
    buyLink: '',
    site: '',
    sort: 3,
    closedForStaking: false,
  },
  //Tomb3SHARESETHRebates: {
  // name: 'Bond ARBSHARE-WETH LP, earn ARBOMB',
  // poolId: 5,
  // sectionInUI: 3,
  //  contract: 'TombEthRewardPool',
  //  depositTokenName: 'ARBSHARE-WETH LP',
  //  earnTokenName: 'ARBOMB',
  //  finished: false,
  //  multiplier: '6000x',
  //  buyLink: '',
  //   site: '',
  //   sort: 2,
  //   closedForStaking: false,
  // },
};

export const ETHER_UNITS = {
  noether: '0',
  wei: '1',
  kwei: '1000',
  Kwei: '1000',
  babbage: '1000',
  femtoether: '1000',
  mwei: '1000000',
  Mwei: '1000000',
  lovelace: '1000000',
  picoether: '1000000',
  gwei: '1000000000',
  Gwei: '1000000000',
  shannon: '1000000000',
  nanoether: '1000000000',
  nano: '1000000000',
  szabo: '1000000000000',
  microether: '1000000000000',
  micro: '1000000000000',
  finney: '1000000000000000',
  milliether: '1000000000000000',
  milli: '1000000000000000',
  ether: '1000000000000000000',
  kether: '1000000000000000000000',
  grand: '1000000000000000000000',
  mether: '1000000000000000000000000',
  gether: '1000000000000000000000000000',
  tether: '1000000000000000000000000000000',
};

export default configurations['production'];
