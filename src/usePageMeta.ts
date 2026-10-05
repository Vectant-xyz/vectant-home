import { useEffect } from "react";
import { canonicalUrl, routeByPath } from "./content";

const ROBOTS_INDEX = "index, follow, max-image-preview:large";

function setMeta(selector: string, content: string) {
  document.querySelector(selector)?.setAttribute("content", content);
}

export function usePageMeta(path: string) {
  const route = routeByPath(path);

  useEffect(() => {
    const robots = document.querySelector('meta[name="robots"]');
    if (!route) {
      document.title = "Page not found | Vectant";
      robots?.setAttribute("content", "noindex");
      return () => {
        robots?.setAttribute("content", ROBOTS_INDEX);
      };
    }

    const url = canonicalUrl(route.path);
    document.title = route.title;
    setMeta('meta[name="description"]', route.description);
    setMeta('meta[property="og:title"]', route.title);
    setMeta('meta[property="og:description"]', route.description);
    setMeta('meta[property="og:url"]', url);
    setMeta('meta[property="og:type"]', route.kind === "article" ? "article" : "website");
    setMeta('meta[name="twitter:title"]', route.title);
    setMeta('meta[name="twitter:description"]', route.description);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", url);
    robots?.setAttribute("content", ROBOTS_INDEX);

    return () => {
      robots?.setAttribute("content", ROBOTS_INDEX);
    };
  }, [route]);
}
