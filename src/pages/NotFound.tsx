import { Link } from "react-router";
import { usePageMeta } from "../usePageMeta";

export function NotFound() {
  usePageMeta("");
  return (
    <main>
      <header className="page-intro">
        <div className="wrap">
          <h1>Page not found</h1>
          <p className="lede">That address is not a Vectant page.</p>
          <p>
            <Link to="/">Back to the homepage</Link>
          </p>
        </div>
      </header>
    </main>
  );
}
