export const HOST = "https://www.vectant.xyz";

export const STATUS_LINE =
  "Vectant is on testnet and is not available on mainnet. No certificate of reserves and no independent audit are published yet.";

export const partners = [
  {
    name: "Helvex",
    href: "https://www.helvex.cc/",
    detail: "RFQ desk",
    summary: "Permissioned RFQ desk on Canton for CC, CBTC, and USDCx.",
  },
  {
    name: "Meridiant",
    href: "https://meridiant.xyz/",
    detail: "lending",
    summary: "Isolated-market lending on Canton.",
  },
] as const;

export type Instrument = {
  name: string;
  basis: string;
  custody: string;
  status: string;
  tone: "live" | "build" | "road" | "part";
};

export const instruments: Instrument[] = [
  { name: "cWETH", basis: "Wrapped Ether", custody: "Safe, EVM", status: "Testnet", tone: "live" },
  { name: "cSOL", basis: "Wrapped SOL", custody: "Squads, SOL", status: "In build", tone: "build" },
  {
    name: "Tokenized gold",
    basis: "Allocated reserve, XAU",
    custody: "Vault custodian",
    status: "Roadmap",
    tone: "road",
  },
  {
    name: "Tokenized securities",
    basis: "Regulated custodian, allowlisted",
    custody: "Transfer agent",
    status: "Roadmap",
    tone: "road",
  },
  {
    name: "Partner assets",
    basis: "Third-party issuers, e.g. GGBR",
    custody: "Per issuer",
    status: "Onboarding",
    tone: "part",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    question: "What does Vectant wrap?",
    answer:
      "Vectant issues wrapped assets as CIP-56 holdings on the Canton Network. [cWETH](/assets) (wrapped Ether) is on testnet. cSOL (wrapped SOL) is in build. Tokenized gold and tokenized securities are on the roadmap. Third-party tokens can list through the same rails, and none of those listings are live yet.",
  },
  {
    question: "Where do the reserves sit?",
    answer:
      "Reserves are designed to stay on the source chain, not on Canton. Ether is designed to sit in an M-of-N Safe on EVM. SOL is designed to sit in Squads on Solana. No single operator is supposed to move the funds, and a Canton transaction is not supposed to drain the vault. There is no public reserve address yet. See [security](/security).",
  },
  {
    question: "How does redemption work?",
    answer:
      "A holder burns the Canton token. That burn does not move the vault by itself. The same M-of-N threshold that confirmed the deposit has to sign the release on the source chain. See [how it works](/how-it-works).",
  },
  {
    question: "What is the current status?",
    answer:
      "Vectant is on testnet and is not on mainnet. cWETH is on testnet, cSOL is in build, and gold and securities are on the roadmap. The figures on the homepage reserve card are a layout sample, not a live attestation. See [instrument status](/blog/instrument-status).",
  },
  {
    question: "Is proof of reserves public?",
    answer:
      "No. A certificate of reserves is planned before any asset reaches mainnet. No certificate and no independent audit report are published today. See [proof of reserves](/proof-of-reserves).",
  },
  {
    question: "How do Helvex and Meridiant fit?",
    answer:
      "Vectant is partnering with [Helvex](https://www.helvex.cc/), a permissioned RFQ desk, and [Meridiant](https://meridiant.xyz/), isolated-market lending on Canton. They have their own sites. Vectant assets are not integrated on those venues yet.",
  },
];

export type RelatedLink = {
  href: string;
  label: string;
};

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  paragraphs: string[];
  related: RelatedLink[];
};

export const posts: Post[] = [
  {
    slug: "what-vectant-wraps",
    title: "What Vectant wraps",
    description: "cWETH is on testnet. cSOL is in build. Tokenized gold and securities are on the roadmap.",
    date: "2026-10-05",
    paragraphs: [
      "Vectant issues wrapped assets as CIP-56 holdings on the Canton Network. The first instrument is cWETH, wrapped Ether, with reserves designed to sit in a Safe on EVM. It is on testnet.",
      "cSOL, wrapped SOL, is in build. Its reserves are designed to sit in Squads on Solana. Tokenized gold and tokenized securities are on the roadmap and are not available to issue.",
      "Third-party tokens can be listed through the same rails. The register names GGBR as an onboarding example, not a live listing. The current list is the [asset register](/assets).",
    ],
    related: [
      { href: "/assets", label: "Asset register" },
      { href: "/faq", label: "FAQ" },
      { href: "/proof-of-reserves", label: "Proof of reserves status" },
    ],
  },
  {
    slug: "where-reserves-sit",
    title: "Where the reserves sit",
    description: "Reserves are designed to stay on the source chain, under an M-of-N signature, not on Canton.",
    date: "2026-10-05",
    paragraphs: [
      "The wrapped token and the reserve are different things. The token is a CIP-56 holding on Canton. The reserve is designed to stay locked on the chain the asset comes from.",
      "For Ether, that vault is an M-of-N Safe on EVM. For SOL, it is Squads on Solana. The vault is designed to be non-upgradeable, with a per-transaction cap, a daily cap, and a pause. No single operator is supposed to move the funds. A Canton transaction is not supposed to drain the vault.",
      "There is no public reserve address yet. The [security model](/security) describes the design. A [certificate of reserves](/proof-of-reserves) is planned before mainnet and is not published.",
    ],
    related: [
      { href: "/security", label: "Security model" },
      { href: "/proof-of-reserves", label: "Proof of reserves status" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    slug: "how-redemption-works",
    title: "How redemption works",
    description: "Burn the Canton token, then an M-of-N signature on the source chain releases the reserve.",
    date: "2026-10-05",
    paragraphs: [
      "Issuance is designed as four steps. The asset is deposited into the source-chain vault. Operators confirm it with an M-of-N signature. Vectant then mints the wrapped asset one to one on Canton through a CIP-56 registry.",
      "Redemption reverses that. The holder burns the Canton token. The burn does not move the vault by itself. The same M-of-N threshold has to sign the release on the source chain. If that signature set is not met, the reserve stays put.",
      "This is the testnet design. It is not a claim that a public proof has already checked mainnet supply. The [step-by-step flow](/how-it-works) and the [FAQ](/faq) use the same description.",
    ],
    related: [
      { href: "/how-it-works", label: "How it works" },
      { href: "/faq", label: "FAQ" },
      { href: "/proof-of-reserves", label: "Proof of reserves status" },
    ],
  },
  {
    slug: "instrument-status",
    title: "Instrument status",
    description: "Vectant is on testnet. cWETH is in test, cSOL is in build, and proof of reserves is not published.",
    date: "2026-10-05",
    paragraphs: [
      "Vectant is not on mainnet. cWETH is on testnet. cSOL is in build. Tokenized gold and tokenized securities are on the roadmap. Partner assets, including the GGBR example, are marked onboarding.",
      "The numbers on the homepage reserve card are a layout sample. They are not a live supply, a vault balance, or a certificate. [Proof of reserves](/proof-of-reserves) is the page that says what is and is not published.",
      "Vectant is partnering with [Helvex](https://www.helvex.cc/), the permissioned RFQ desk, and [Meridiant](https://meridiant.xyz/), isolated-market lending on Canton. Those products have their own sites. Vectant assets are not integrated on them yet.",
    ],
    related: [
      { href: "/assets", label: "Asset register" },
      { href: "https://www.helvex.cc/", label: "Helvex" },
      { href: "https://meridiant.xyz/", label: "Meridiant" },
      { href: "/proof-of-reserves", label: "Proof of reserves status" },
    ],
  },
];

export type RouteKind = "page" | "article" | "faq";

export type RouteMeta = {
  path: string;
  title: string;
  heading: string;
  description: string;
  kind: RouteKind;
};

const homeDescription =
  "Vectant issues wrapped assets on the Canton Network. Testnet only. Reserves are designed to sit one to one in independent multisig custody. No public certificate yet.";

export const routes: RouteMeta[] = [
  {
    path: "/",
    title: "Vectant | Wrapped assets on Canton with proof you can check",
    heading: "Wrapped assets on Canton with proof you can check.",
    description: homeDescription,
    kind: "page",
  },
  {
    path: "/how-it-works",
    title: "How Vectant locks, mints, and redeems | Vectant",
    heading: "How Vectant locks, mints, and redeems",
    description:
      "Lock assets in a source-chain multisig, mint a CIP-56 token on Canton, and redeem by burning it. Release still needs the M-of-N signature.",
    kind: "page",
  },
  {
    path: "/assets",
    title: "Vectant instruments and status | Vectant",
    heading: "What Vectant wraps",
    description:
      "cWETH is on testnet. cSOL is in build. Tokenized gold and securities are on the roadmap. Vectant is not on mainnet.",
    kind: "page",
  },
  {
    path: "/security",
    title: "Vectant security model | Vectant",
    heading: "How the vault is meant to hold",
    description:
      "Reserves are designed to move only by an M-of-N signature on the source chain. No audit report is published yet.",
    kind: "page",
  },
  {
    path: "/proof-of-reserves",
    title: "Proof of reserves status | Vectant",
    heading: "Proof of reserves",
    description:
      "Vectant has not published a certificate of reserves or an independent audit. Both are planned before mainnet.",
    kind: "page",
  },
  {
    path: "/faq",
    title: "Vectant FAQ | Vectant",
    heading: "Questions about Vectant",
    description:
      "What Vectant wraps, where reserves sit, how redemption works, instrument status, and how Helvex and Meridiant fit.",
    kind: "faq",
  },
  {
    path: "/blog",
    title: "Vectant blog | Vectant",
    heading: "Notes on the testnet",
    description: "What is wrapped, where reserves sit, how redemption works, and which instruments are actually live.",
    kind: "page",
  },
  ...posts.map(
    (post): RouteMeta => ({
      path: `/blog/${post.slug}`,
      title: `${post.title} | Vectant`,
      heading: post.title,
      description: post.description,
      kind: "article",
    }),
  ),
];

export function routeByPath(path: string) {
  return routes.find((route) => route.path === path);
}

export function canonicalUrl(path: string) {
  return path === "/" ? `${HOST}/` : `${HOST}${path}`;
}
