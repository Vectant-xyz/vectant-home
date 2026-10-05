import { Link } from "react-router";
import type { RelatedLink } from "../content";

export function RichText({ text }: { text: string }) {
  const chunks = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return chunks.map((chunk, index) => {
    const match = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(chunk);
    if (!match) return <span key={index}>{chunk}</span>;
    const [, label, href] = match;
    if (href.startsWith("/")) return <Link key={index} to={href}>{label}</Link>;
    const external = href.startsWith("http");
    return (
      <a key={index} href={href} rel={external ? "noopener noreferrer" : undefined} target={external ? "_blank" : undefined}>
        {label}
      </a>
    );
  });
}

export function PageLinks({ links }: { links: readonly RelatedLink[] }) {
  return (
    <ul className="related">
      {links.map((link) => (
        <li key={link.href}>
          {link.href.startsWith("/") ? (
            <Link to={link.href}>{link.label}</Link>
          ) : (
            <a
              href={link.href}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              target={link.href.startsWith("http") ? "_blank" : undefined}
            >
              {link.label}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}
