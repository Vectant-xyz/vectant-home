import { Link } from "react-router";
import { partners } from "../content";
import { CheckIcon } from "./icons";

const checks = [
  "Threshold custody, with proof of reserves planned before mainnet",
  "CIP-56 registry, mint and burn, compliance-as-code",
  "Canton Coin activity rewards routed to your venues",
  "Designed for distribution across Canton wallets and venues",
];

const venues: { name: string; detail: string; href?: string }[] = [
  ...partners.map((partner) => ({ name: partner.name, detail: partner.detail, href: partner.href })),
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
              <Link className="btn btn-primary" to="/#contact">
                Request a listing
              </Link>
            </div>
          </div>
          <div className="panel">
            <div className="pin">
              <span className="mono kicker">Ecosystem</span>
              <h3>Built to settle on Canton</h3>
              <p>
                Vectant assets are standard CIP-56 holdings, so a compatible wallet or venue can integrate them.
                Vectant is partnering with Helvex and Meridiant. That integration is not live yet.
              </p>
              <div className="venues">
                {venues.map((venue) =>
                  venue.href ? (
                    <a className="vn" href={venue.href} key={venue.href} rel="noopener noreferrer" target="_blank">
                      <b>{venue.name}</b> {venue.detail}
                    </a>
                  ) : (
                    <span className="vn" key={venue.detail}>
                      {venue.detail}
                    </span>
                  ),
                )}
              </div>
              <p className="eco-note">
                <a href="https://www.helvex.cc/" rel="noopener noreferrer" target="_blank">
                  Helvex
                </a>{" "}
                is the permissioned RFQ desk.{" "}
                <a href="https://meridiant.xyz/" rel="noopener noreferrer" target="_blank">
                  Meridiant
                </a>{" "}
                is isolated-market lending. Vectant assets are not listed
                on either venue yet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
