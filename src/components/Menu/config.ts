import { MenuEntry } from 'naga-uikit/widgets/Menu'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'BUY NAGA',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://pancake.kiemtienonline360.com/#/swap?outputCurrency=0x6a3e6259e5c7804eb23B8F579620fC7b2c83cd1d',
      },
      {
        label: 'Liquidity',
        href: 'https://pancake.kiemtienonline360.com//#/add/ETH/0x6a3e6259e5c7804eb23B8F579620fC7b2c83cd1d',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pool',
    icon: 'PoolIcon',
    href: '/pools',
  },
  
  // {
  //   label: 'sNFT',
  //   icon: 'NftIcon',
  //   href: '/nfts',
  // },
  // {
  //   label: 'cNFT',
  //   icon: 'NftIcon',
  //   href: '/cnfts',
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'BNFT',
  //   icon: 'NftIcon',
  //   href: '/bnfts',
  // },
  // {
  //   label: 'Lucky Draw',
  //   icon: 'TicketIcon',
  //   href: '/NotFound',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'PancakeSwap',
  //       href: 'https://pancakeswap.info/token/0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6',
  //     },
  //     {
  //       label: 'CoinGecko',
  //       href: 'https://www.coingecko.com/en/coins/goose-finance',
  //     },
  //     {
  //       label: 'CoinMarketCap',
  //       href: 'https://coinmarketcap.com/currencies/goose-finance/',
  //     },
  //     {
  //       label: 'AstroTools',
  //       href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
  //     },
  //   ],
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href : 'https://blockchain-the-new-gen.gitbook.io/ngen-1/about-us/contact'

      },
      {
        label: 'Voting',
        href : 'https://snapshot.org/#/nagafinance.eth'

      },
      {
        label: 'Github',
        href: 'https://github.com/NGen-Defi-Society',
      },
      {
        label: 'Docs',
        href: 'https://blockchain-the-new-gen.gitbook.io/',
      },
      {
        label: 'Blog',
        href: 'https://blockchainthenewgen.com/',
      },
    ],
  },
  // {
  //   label: 'Partnerships/IFO',
  //   icon: 'GooseIcon',
  //   href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  // },
  // {
  //   label: 'Click',
  //   icon: 'AuditIcon',
  //   href: 'https://pancake.kiemtienonline360.com/#/swap?outputCurrency=0x6363c06453ecd85d922b108f77f3abe254e24678',
  // },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'AuditIcon',
  //   href: 'https://certik.org/projects/goose-finance',
  // },
]

export default config
