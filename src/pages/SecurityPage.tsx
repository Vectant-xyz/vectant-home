import { PageIntro } from "../components/PageIntro";
import { Security } from "../components/Security";

export function SecurityPage() {
  return (
    <main>
      <PageIntro
        path="/security"
        lede="Reserves are designed to leave the source chain only with an M-of-N signature. Canton is not supposed to be able to drain the vault. No audit report is published yet."
      />
      <Security />
    </main>
  );
}
