import { CheckIcon } from "./icons";

const checks = [
  "Threshold custody and proof-of-reserve, run for you",
  "CIP-56 registry, mint and burn, compliance-as-code",
  "Canton Coin activity rewards routed to your venues",
  "Distribution across Canton wallets and venues",
];

const venues = [
  { name: "Helvex", detail: " RFQ swaps" },
  { name: "Meridiant", detail: " lending" },
  { name: "", detail: "CIP-56 wallets" },
  { name: "", detail: "DvP settlement" },
  { name: "", detail: "Order books" },
  { name: "", detail: "Structured products" },
];

export function Audiences() {
  return (
    <section>
      <div className="wrap">
        <div className="split">
          <div className="panel" id="issuers">
            <div className="pin">
              <span className="mono kicker">For issuers</span>
              <h3>List your token on Canton</h3>
              <p>
                Bring an asset to a private, institutional settlement layer without building the hard parts. Vectant
                provides the custody, the registry, and the Canton rewards routing.
              </p>
              <div className="checks">
                {checks.map((item) => (
                  <div className="check" key={item}>
                    <CheckIcon />
                    {item}
                  </div>
                ))}
              </div>
              <a className="btn btn-primary" href="#contact">
                Request a listing
              </a>
            </div>
          </div>
          <div className="panel">
            <div className="pin">
              <span className="mono kicker">Ecosystem</span>
              <h3>Built to trade across Canton</h3>
              <p>
                Vectant assets are standard CIP-56 holdings, so they work in any compatible wallet or venue. They are
                designed to trade and settle across the network from day one.
              </p>
              <div className="venues">
                {venues.map((venue) => (
                  <span className="vn" key={venue.name + venue.detail}>
                    {venue.name ? <b>{venue.name}</b> : null}
                    {venue.detail}
                  </span>
                ))}
              </div>
              <p className="eco-note">
                Helvex and Meridiant are sibling products in the same group. Any CIP-56 venue can integrate Vectant
                assets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
