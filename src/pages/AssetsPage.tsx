import { PageIntro } from "../components/PageIntro";
import { Register } from "../components/Register";

export function AssetsPage() {
  return (
    <main>
      <PageIntro
        path="/assets"
        lede="vETH, wrapped Ether, is on testnet. vSOL is in build. Tokenized gold, tokenized securities, and third-party listings are not live."
      />
      <Register />
    </main>
  );
}
