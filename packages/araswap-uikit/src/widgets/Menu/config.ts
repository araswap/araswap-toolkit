import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "https://exchange.araswap.com",
      },
      {
        label: "Liquidity",
        href: "https://exchange.araswap.com/#/pool",
      },
    ],
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
    status: status.LIVE,
  },
  {
    label: "Pools",
    icon: "PoolIcon",
    href: "/syrup",
  },
  {
    label: "Lottery",
    icon: "TicketIcon",
    href: "/lottery",
  },
  {
    label: "NFT",
    icon: "NftIcon",
    href: "/nft",
  },
  {
    label: "Team Battle",
    icon: "TeamBattleIcon",
    href: "/competition",
    status: status.SOON,
  },
  {
    label: "Profile & Teams",
    icon: "GroupsIcon",
    status: status.LIVE,
    items: [
      {
        label: "Leaderboard",
        href: "/teams",
        status: status.NEW,
      },
      {
        label: "YourProfile",
        href: "/",
      },
    ],
    calloutClass: "rainbow",
  },
  {
    label: "Info",
    icon: "InfoIcon",
    items: [
      {
        label: "Overview",
        href: "https://araswap.info",
      },
      {
        label: "Tokens",
        href: "https://araswap.info/tokens",
      },
      {
        label: "Pairs",
        href: "https://araswap.info/pairs",
      },
      {
        label: "Accounts",
        href: "https://araswap.info/accounts",
      },
    ],
  },
  {
    label: "IFO",
    icon: "IfoIcon",
    items: [
      {
        label: "Next",
        href: "/ifo",
      },
      {
        label: "History",
        href: "/ifo/history",
      },
    ],
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Voting",
        href: "https://voting.araswap.com",
      },
      {
        label: "Github",
        href: "https://github.com/araswap",
      },
      {
        label: "Docs",
        href: "https://docs.araswap.com",
      },
      {
        label: "Blog",
        href: "https://araswap.medium.com",
      },
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "English",
        href: "https://t.me/araswap",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/AraSwapIndonesia",
      },
      {
        label: "中文",
        href: "https://t.me/AraSwap_CN",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/AraSwapVN",
      },
      {
        label: "Italiano",
        href: "https://t.me/araswap_ita",
      },
      {
        label: "русский",
        href: "https://t.me/araswap_ru",
      },
      {
        label: "Türkiye",
        href: "https://t.me/araswapturkiye",
      },
      {
        label: "Português",
        href: "https://t.me/AraSwapPortuguese",
      },
      {
        label: "Español",
        href: "https://t.me/AraSwapEs",
      },
      {
        label: "日本語",
        href: "https://t.me/araswapjp",
      },
      {
        label: "Français",
        href: "https://t.me/araswapfr",
      },
      {
        label: "Announcements",
        href: "https://t.me/AraSwapAnn",
      },
      {
        label: "Whale Alert",
        href: "https://t.me/AraSwapWhales",
      },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/araswap",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
