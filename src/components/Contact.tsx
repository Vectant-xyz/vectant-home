import { Link } from "react-router";
import { ArrowIcon } from "./icons";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <div className="cta">
          <h2 id="contact-title">Put your asset on Canton with backing you can prove.</h2>
          <p>Issuance, listings, and custody design are described in the product pages. A public contact address is not published on this site yet.</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/how-it-works">
              See how it works
              <ArrowIcon />
            </Link>
            <Link className="btn btn-ghost" to="/faq">
              Read the FAQ
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
