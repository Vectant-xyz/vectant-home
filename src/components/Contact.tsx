import { ArrowIcon } from "./icons";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <div className="cta">
          <h2 id="contact-title">Put your asset on Canton with backing you can prove.</h2>
          <p>Talk to the team about issuing a wrapped asset, listing a token, or operating a node in the custody set.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="mailto:hello@vectant.xyz">
              Talk to us
              <ArrowIcon />
            </a>
            <a className="btn btn-ghost" href="#how">
              Read how it works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
