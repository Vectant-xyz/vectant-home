const steps = [
  {
    numeral: "01",
    title: "Lock",
    body: "Assets are deposited into the source-chain multisig vault. M-of-N operators confirm the deposit.",
  },
  {
    numeral: "02",
    title: "Mint",
    body: "Vectant mints the wrapped asset one to one on Canton through a CIP-56 registry contract.",
  },
  {
    numeral: "03",
    title: "Verify",
    body: "Circulating supply is designed to be checked against locked reserves. A public certificate is planned before mainnet and is not published yet.",
  },
  {
    numeral: "04",
    title: "Redeem",
    body: "Burning the Canton token does not move the vault by itself. The same M-of-N threshold has to sign the release on the source chain.",
  },
];

const label = {
  fill: "#0B8F72",
  fontFamily: "Outfit,sans-serif",
  fontSize: 12,
  letterSpacing: 1.4,
  fontWeight: 600,
};

const title = {
  fill: "#101614",
  fontFamily: "'Plus Jakarta Sans',sans-serif",
  fontWeight: 700,
  fontSize: 24,
};

const sub = {
  fill: "#3D4742",
  fontFamily: "Outfit,sans-serif",
  fontSize: 14,
};

export function HowItWorks() {
  return (
    <section className="band" id="how">
      <div className="wrap">
        <div className="sec-head">
          <span className="mono">How it works</span>
          <h2>Lock, mint, verify, redeem</h2>
          <p>Two mirrored thresholds, held by the same independent operators, govern both sides of the bridge.</p>
        </div>
        <div className="flow">
          {steps.map((step) => (
            <div className="step" key={step.numeral}>
              <div className="ri">{step.numeral}</div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
        <div className="diagram">
          <svg
            viewBox="0 0 960 300"
            role="img"
            aria-label="Source-chain vault locks reserves; Vectant registry mints the wrapped asset on Canton; redemption burns and releases."
          >
            <defs>
              <marker id="af" markerWidth="10" markerHeight="10" refX="7" refY="5" orient="auto">
                <path d="M0 0 L8 5 L0 10 z" fill="#0B8F72" />
              </marker>
              <marker id="ab" markerWidth="10" markerHeight="10" refX="7" refY="5" orient="auto">
                <path d="M0 0 L8 5 L0 10 z" fill="#101614" />
              </marker>
            </defs>
            <rect x="18" y="70" width="256" height="160" fill="none" stroke="#D7DED9" />
            <rect x="24" y="76" width="244" height="148" fill="none" stroke="#0B8F72" strokeOpacity="0.5" />
            <text x="44" y="106" {...label}>
              SOURCE CHAIN
            </text>
            <text x="44" y="146" {...title}>
              Multisig vault
            </text>
            <text x="44" y="172" {...sub}>
              Safe on EVM, Squads on Solana
            </text>
            <text x="44" y="204" fill="#5C6761" fontFamily="Outfit,sans-serif" fontSize="11" letterSpacing="1">
              M-OF-N LOCK
            </text>

            <rect x="352" y="52" width="256" height="196" fill="none" stroke="#0B8F72" />
            <rect x="358" y="58" width="244" height="184" fill="none" stroke="#0B8F72" strokeOpacity="0.35" />
            <text x="378" y="90" fill="#0B8F72" fontFamily="Outfit,sans-serif" fontSize="11" letterSpacing="2">
              CANTON
            </text>
            <text x="378" y="142" {...title}>
              Vectant registry
            </text>
            <text x="378" y="168" {...sub}>
              CIP-56 mint and burn
            </text>
            <text x="378" y="200" fill="#0B8F72" fontFamily="Outfit,sans-serif" fontSize="11" letterSpacing="1">
              PROOF OF RESERVES
            </text>

            <rect x="686" y="70" width="256" height="160" fill="none" stroke="#D7DED9" />
            <rect x="692" y="76" width="244" height="148" fill="none" stroke="#0B8F72" strokeOpacity="0.5" />
            <text x="712" y="106" {...label}>
              HOLDER · VENUE
            </text>
            <text x="712" y="146" {...title}>
              Wrapped asset
            </text>
            <text x="712" y="172" {...sub}>
              Trade, lend, settle privately
            </text>
            <text x="712" y="204" fill="#5C6761" fontFamily="Outfit,sans-serif" fontSize="11" letterSpacing="1">
              cWETH · cSOL
            </text>

            <line x1="274" y1="124" x2="350" y2="124" stroke="#0B8F72" strokeWidth="1.6" markerEnd="url(#af)" />
            <text x="288" y="115" fill="#0B8F72" fontFamily="Outfit,sans-serif" fontSize="10.5" letterSpacing="1">
              lock
            </text>
            <line x1="608" y1="124" x2="684" y2="124" stroke="#0B8F72" strokeWidth="1.6" markerEnd="url(#af)" />
            <text x="624" y="115" fill="#0B8F72" fontFamily="Outfit,sans-serif" fontSize="10.5" letterSpacing="1">
              mint
            </text>
            <line x1="684" y1="176" x2="608" y2="176" stroke="#101614" strokeWidth="1.6" markerEnd="url(#ab)" />
            <text x="618" y="193" fill="#101614" fontFamily="Outfit,sans-serif" fontSize="10.5" letterSpacing="1">
              burn
            </text>
            <line x1="350" y1="176" x2="274" y2="176" stroke="#101614" strokeWidth="1.6" markerEnd="url(#ab)" />
            <text x="286" y="193" fill="#101614" fontFamily="Outfit,sans-serif" fontSize="10.5" letterSpacing="1">
              release
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
