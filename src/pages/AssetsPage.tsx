import { PageIntro } from "../components/PageIntro";
import { Register } from "../components/Register";

export function AssetsPage() {
  return (
    <main>
      <PageIntro
        path="/assets"
        lede="cWETH, wrapped Ether, is on testnet. cSOL is in build. Tokenized gold, tokenized securities, and third-party listings are not live."
      />
      <Register />
    </main>
  );
}
