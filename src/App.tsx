import { Audiences } from "./components/Audiences";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Nav } from "./components/Nav";
import { Platform, Thesis } from "./components/Platform";
import { Register } from "./components/Register";
import { Security } from "./components/Security";

export default function App() {
  return (
    <>
      <a className="skip" href="#top">
        Skip to content
      </a>
      <Nav />
      <a id="top" />
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
      <Footer />
    </>
  );
}
