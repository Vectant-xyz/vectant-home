import { Link } from "react-router";
import { PageLinks } from "../components/RichText";
import { PageIntro } from "../components/PageIntro";

export function ProofPage() {
  return (
    <main>
      <PageIntro path="/proof-of-reserves" />
      <div className="wrap narrow">
        <h2>What is published today</h2>
        <p>Nothing. There is no certificate of reserves, no auditor name, no report date, and no reserve URL.</p>
        <p>
          The reserve card on the <Link to="/">homepage</Link> is a layout sample. Its supply, balance, and “illustrative”
          label are not an attestation.
        </p>
        <h2>What a certificate will need before mainnet</h2>
        <p>For each instrument, a public certificate should name the instrument, the vault, the supply, the reserve balance, the as-of date, and who produced it. An independent audit of the vault, the watcher, and the Canton wiring is planned on the same timeline. Neither exists yet.</p>
        <h2>What the design is</h2>
        <p>
          Supply is designed to be checked against assets locked in an M-of-N Safe on EVM or Squads on Solana. That check
          is a plan for mainnet, not a report you can open today. The <Link to="/security">security page</Link> describes
          the control, and the <Link to="/assets">register</Link> shows which instruments are testnet, in build, or
          roadmap.
        </p>
        <PageLinks
          links={[
            { href: "/security", label: "Security model" },
            { href: "/assets", label: "Instrument status" },
            { href: "/faq", label: "FAQ" },
          ]}
        />
      </div>
    </main>
  );
}
