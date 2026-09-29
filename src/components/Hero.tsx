import { ArrowIcon } from "./icons";

const attestations = [
  "1:1 reserves",
  "M-of-N custody",
  "Public proof of reserves",
  "Redeemable on Canton",
];

const metrics = [
  { label: "Circulating supply", value: "1,842.5000" },
  { label: "Reserves locked", value: "1,842.5000" },
  { label: "Backing ratio", value: "100.00%", good: true },
  { label: "Custody", value: "4-of-7" },
];

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <p className="mono eyebrow">Proof-backed Canton assets</p>
            <h1 id="hero-title" className="head">
              Wrapped assets on Canton,
              <span className="ital">with proof you can check.</span>
            </h1>
            <p className="lede">
              Vectant issues wrapped assets backed one to one by reserves held in independent multi-signature
              custody. Supply is reconciled against reserves continuously, and the proof is public.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">
                Talk to us
                <ArrowIcon />
              </a>
              <a className="btn btn-ghost" href="#how">
                See how it works
              </a>
            </div>
            <div className="attest">
              {attestations.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <aside className="reserve" aria-label="Illustrative reserve status for cWETH on Canton">
            <div className="reserve-top">
              <div>
                <p className="reserve-kicker">Reserve status · illustrative</p>
                <p className="reserve-name">cWETH</p>
                <p className="reserve-sub">Wrapped Ether, issued on Canton</p>
              </div>
              <span className="pill">Reserves verified</span>
            </div>
            <dl className="metrics">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <dt>{metric.label}</dt>
                  <dd className={metric.good ? "num good" : "num"}>{metric.value}</dd>
                </div>
              ))}
            </dl>
            <p className="reserve-note">Figures shown for layout. Attested on-chain via CIP-56.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
