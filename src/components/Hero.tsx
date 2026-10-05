import { Link } from "react-router";
import { ArrowIcon } from "./icons";

const attestations = ["1:1 by design", "M-of-N custody", "Certificate before mainnet", "On testnet"];

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
              Wrapped assets on Canton
              <br />
              <span className="ital">with proof you can check.</span>
            </h1>
            <p className="lede">
              Vectant issues wrapped assets designed to be backed one to one by reserves in independent
              multi-signature custody. Vectant is on testnet. A public certificate of reserves and an independent
              audit are not published yet.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/#contact">
                Talk to us
                <ArrowIcon />
              </Link>
              <Link className="btn btn-ghost" to="/how-it-works">
                See how it works
              </Link>
            </div>
            <div className="attest">
              {attestations.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <aside className="reserve" aria-label="Illustrative reserve card for cWETH. Not a live attestation.">
            <div className="reserve-top">
              <div>
                <p className="reserve-kicker">Reserve status · illustrative</p>
                <p className="reserve-name">cWETH</p>
                <p className="reserve-sub">Wrapped Ether, issued on Canton</p>
              </div>
              <span className="pill">Illustrative</span>
            </div>
            <dl className="metrics">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <dt>{metric.label}</dt>
                  <dd className={metric.good ? "num good" : "num"}>{metric.value}</dd>
                </div>
              ))}
            </dl>
            <p className="reserve-note">
              Figures shown for layout only. Not a live supply, vault balance, or certificate.{" "}
              <Link to="/proof-of-reserves">Proof of reserves status</Link>
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
