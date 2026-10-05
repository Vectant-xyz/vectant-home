import { faq } from "../content";
import { PageIntro } from "../components/PageIntro";
import { RichText } from "../components/RichText";

export function FaqPage() {
  return (
    <main>
      <PageIntro path="/faq" />
      <div className="wrap narrow">
        {faq.map((item) => (
          <section className="faq-item" key={item.question}>
            <h2>{item.question}</h2>
            <p>
              <RichText text={item.answer} />
            </p>
          </section>
        ))}
      </div>
    </main>
  );
}
