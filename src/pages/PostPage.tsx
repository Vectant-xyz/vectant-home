import { useParams } from "react-router";
import { posts } from "../content";
import { PageIntro } from "../components/PageIntro";
import { PageLinks, RichText } from "../components/RichText";
import { NotFound } from "./NotFound";

export function PostPage() {
  const { slug = "" } = useParams();
  const post = posts.find((item) => item.slug === slug);
  if (!post) return <NotFound />;

  return (
    <main>
      <PageIntro path={`/blog/${post.slug}`} />
      <article className="wrap narrow">
        <p className="mono post-date">{post.date}</p>
        {post.paragraphs.map((paragraph) => (
          <p key={paragraph}>
            <RichText text={paragraph} />
          </p>
        ))}
        <PageLinks links={post.related} />
      </article>
    </main>
  );
}
