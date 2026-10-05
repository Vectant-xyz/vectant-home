import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import { AssetsPage } from "./pages/AssetsPage";
import { BlogPage } from "./pages/BlogPage";
import { FaqPage } from "./pages/FaqPage";
import { Home } from "./pages/Home";
import { HowPage } from "./pages/HowPage";
import { NotFound } from "./pages/NotFound";
import { PostPage } from "./pages/PostPage";
import { ProofPage } from "./pages/ProofPage";
import { SecurityPage } from "./pages/SecurityPage";

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (/^#[A-Za-z0-9_-]+$/.test(hash)) {
      document.querySelector(hash)?.scrollIntoView();
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export function App() {
  return (
    <>
      <ScrollToHash />
      <a className="skip" href="#top">
        Skip to content
      </a>
      <Nav />
      <a id="top" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowPage />} />
        <Route path="/assets" element={<AssetsPage />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/proof-of-reserves" element={<ProofPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<PostPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
