import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Logo, MenuIcon } from "./icons";

const links = [
  { to: "/how-it-works", label: "How it works" },
  { to: "/security", label: "Security" },
  { to: "/assets", label: "Assets" },
  { to: "/faq", label: "FAQ" },
  { to: "/blog", label: "Blog" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-in">
        <Link className="brand" to="/" onClick={() => setOpen(false)}>
          <Logo />
          Vectant
        </Link>
        <nav className={open ? "nav-links open" : "nav-links"} aria-label="Primary">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <Link className="nav-cta" to="/#contact" onClick={() => setOpen(false)}>
          Talk to us
        </Link>
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
