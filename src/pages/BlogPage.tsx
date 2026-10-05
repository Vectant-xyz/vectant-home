import { Link } from "react-router";
import { posts } from "../content";
import { PageIntro } from "../components/PageIntro";

export function BlogPage() {
  return (
    <main>
      <PageIntro path="/blog" />
      <div className="wrap narrow">
        {posts.map((post) => (
          <article className="post-card" key={post.slug}>
            <p className="mono post-date">{post.date}</p>
            <h2>
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p>{post.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
