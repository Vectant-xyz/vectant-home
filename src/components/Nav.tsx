import { useState } from "react";
import { Logo, MenuIcon } from "./icons";

const links = [
  { href: "#platform", label: "Platform" },
  { href: "#how", label: "How it works" },
  { href: "#security", label: "Security" },
  { href: "#assets", label: "Assets" },
  { href: "#issuers", label: "Issuers" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-in">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <Logo />
          Vectant
        </a>
        <nav className={open ? "nav-links open" : "nav-links"} aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href="#contact">
          Talk to us
        </a>
        <button
          className="burger"
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <MenuIcon />
        </button>
      </div>
    </header>
  );
}
