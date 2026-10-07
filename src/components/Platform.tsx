function GlobeIcon() {
  return (
    <svg viewBox="0 0 40 40">
      <circle cx="20" cy="20" r="15" />
      <path d="M20 5v30M5 20h30" />
      <circle cx="20" cy="20" r="6" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 40 40">
      <rect x="8" y="17" width="24" height="16" rx="1.5" />
      <path d="M13 17v-4a7 7 0 0 1 14 0v4" />
      <circle cx="20" cy="25" r="2.2" />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg viewBox="0 0 40 40">
      <path d="M8 12h24M8 20h24M8 28h16" />
      <path d="M28 27l3 3 5-6" />
    </svg>
  );
}

const articles = [
  {
    title: "Wrapped assets",
    body: "vETH is on testnet and vSOL is in build, then tokenized gold and securities on the roadmap. Each token is designed to be backed one to one and issued as a 10-decimal CIP-56 holding.",
    icon: <GlobeIcon />,
  },
  {
    title: "Multi-signature custody",
    body: "Reserves sit in an M-of-N Safe on EVM or Squads on Solana. No single operator can move funds. The vault is non-upgradeable, with per-transaction and daily caps and a pause switch.",
    icon: <LockIcon />,
  },
  {
    title: "Issuance as a service",
    body: "List a token on Canton without building custody, compliance, or reward plumbing. Vectant runs the registry, the vault, and the Canton integration, and routes activity rewards to the venue.",
    icon: <ListIcon />,
  },
];

export function Thesis() {
  return (
    <section className="band" id="platform">
      <div className="wrap">
        <div className="thesis-grid">
          <h2 className="thesis">
            Canton settles finance privately. Vectant makes the backing <span className="ital">a matter of record.</span>
          </h2>
          <div>
            <p className="thesis-copy">
              A tokenized asset is only as good as its reserves. Vectant keeps the two jobs separate: reserves are
              designed to stay locked on the source chain under threshold custody, and the wrapped token lives on
              Canton. A public certificate of reserves is planned for each instrument before mainnet. None is published
              today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Platform() {
  return (
    <section>
      <div className="wrap">
        <div className="sec-head">
          <span className="mono">The platform</span>
          <h2>Issue, custody, verify</h2>
          <p>Mint an asset and hold its reserves under distributed control. The public backing check comes before mainnet, and it is not available yet.</p>
        </div>
        <div className="arts">
          {articles.map((article) => (
            <div className="art" key={article.title}>
              <div className="gi">{article.icon}</div>
              <h3>{article.title}</h3>
              <p>{article.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
