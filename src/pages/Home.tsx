import { Audiences } from "../components/Audiences";
import { Contact } from "../components/Contact";
import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";
import { Platform, Thesis } from "../components/Platform";
import { Register } from "../components/Register";
import { Security } from "../components/Security";
import { usePageMeta } from "../usePageMeta";

export function Home() {
  usePageMeta("/");
  return (
    <main>
      <Hero />
      <Thesis />
      <Platform />
      <HowItWorks />
      <Security />
      <Register />
      <Audiences />
      <Contact />
    </main>
  );
}
