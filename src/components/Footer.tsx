import { Link } from "react-router";
import { Logo } from "./icons";

const columns: { title: string; links: { href: string; label: string; external?: boolean }[] }[] = [
  {
    title: "Platform",
    links: [
      { href: "/how-it-works", label: "How it works" },
      { href: "/assets", label: "Assets" },
      { href: "/security", label: "Security" },
      { href: "/proof-of-reserves", label: "Proof of reserves" },
      { href: "/#issuers", label: "Issuers" },
    ],
  },
  {
    title: "Learn",
    links: [
      { href: "/faq", label: "FAQ" },
      { href: "/blog", label: "Blog" },
      { href: "/blog/what-vectant-wraps", label: "What is wrapped" },
      { href: "/blog/how-redemption-works", label: "Redemption" },
    ],
  },
  {
    title: "Partners",
    links: [
      { href: "https://www.helvex.cc/", label: "Helvex", external: true },
      { href: "https://meridiant.xyz/", label: "Meridiant", external: true },
      { href: "/#contact", label: "Contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link className="brand" to="/">
              <Logo size={28} />
              Vectant
            </Link>
            <p>Wrapped assets on the Canton Network, on testnet.</p>
          </div>
          {columns.map((column) => (
            <div className="foot-col" key={column.title}>
              <h4>{column.title}</h4>
              {column.links.map((link) =>
                link.href.startsWith("/") ? (
                  <Link key={column.title + link.label} to={link.href}>
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={column.title + link.label}
                    href={link.href}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    target={link.external ? "_blank" : undefined}
                  >
                    {link.label}
                  </a>
                ),
              )}
            </div>
          ))}
        </div>
        <p className="disc">
          Nothing on this site is investment,
          legal, or tax advice, or an offer to sell or a solicitation to buy any security. Building on or interacting
          with the Canton Network, wrapped assets, or bridge infrastructure carries risk, including smart-contract,
          custody, and third-party operator risk. Do your own diligence. Canton Coin rewards and incentives are set by
          the Canton Network and can change without notice. Vectant is on testnet and is not yet available on mainnet.
          No certificate of reserves and no independent audit are published yet.
        </p>
        <p className="copy">© 2026 Vectant. All rights reserved.</p>
      </div>
    </footer>
  );
}
