import { HowItWorks } from "../components/HowItWorks";
import { PageIntro } from "../components/PageIntro";

export function HowPage() {
  return (
    <main>
      <PageIntro
        path="/how-it-works"
        lede="Deposit the asset into a source-chain multisig, mint one to one on Canton, and redeem by burning the token. The vault releases only after the same M-of-N signature."
      />
      <HowItWorks />
    </main>
  );
}
