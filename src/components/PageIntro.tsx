import { routeByPath, STATUS_LINE } from "../content";
import { usePageMeta } from "../usePageMeta";

export function PageIntro({ path, lede }: { path: string; lede?: string }) {
  const route = routeByPath(path);
  usePageMeta(path);
  if (!route) return null;

  return (
    <header className="page-intro">
      <div className="wrap">
        <p className="eyebrow">{route.kind === "article" ? "Blog" : "Vectant"}</p>
        <h1>{route.heading}</h1>
        <p className="lede">{lede ?? route.description}</p>
        <p className="banner">{STATUS_LINE}</p>
      </div>
    </header>
  );
}
