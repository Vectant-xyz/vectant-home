import { Logo } from "./icons";

const columns = [
  {
    title: "Platform",
    links: [
      { href: "#platform", label: "Overview" },
      { href: "#how", label: "How it works" },
      { href: "#assets", label: "Assets" },
      { href: "#security", label: "Security" },
    ],
  },
  {
    title: "Builders",
    links: [
      { href: "#issuers", label: "Issuers" },
      { href: "#contact", label: "Node operators" },
      { href: "#how", label: "Docs" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "#contact", label: "Contact" },
      { href: "#contact", label: "Partners" },
    ],
  },
];

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <a className="brand" href="#top">
              <Logo size={28} />
              Vectant
            </a>
            <p>Verifiable wrapped assets on the Canton Network. Built by Catalyst Labs, a Dream Capital company.</p>
          </div>
          {columns.map((column) => (
            <div className="foot-col" key={column.title}>
              <h4>{column.title}</h4>
              {column.links.map((link) => (
                <a key={column.title + link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
        <p className="disc">
          Vectant is a product of Catalyst Labs and Dream Capital. Nothing on this site is investment, legal, or tax
          advice, or an offer to sell or a solicitation to buy any security. Building on or interacting with the Canton
          Network, wrapped assets, or bridge infrastructure carries risk, including smart-contract, custody, and
          third-party operator risk. Do your own diligence. Canton Coin rewards and incentives are set by the Canton
          Network and can change without notice. Vectant is on testnet and is not yet available on mainnet.
        </p>
        <p className="copy">© 2026 Catalyst Labs. All rights reserved.</p>
      </div>
    </footer>
  );
}
