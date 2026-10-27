import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { formatDate, getAllPosts, getPost, renderMarkdown } from "@/lib/posts";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    openGraph: { type: "article", title: post.title, description: post.summary, publishedTime: post.date },
  };
}

export default async function PostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const posts = getAllPosts();
  const index = posts.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const post = posts[index];
  const newer = posts[index - 1];
  const older = posts[index + 1];

  return (
    <article className="my-8 pb-20">
      <Link href="/blog" className="font-mono text-xs text-muted-foreground hover:text-foreground">
        ← All writing
      </Link>

      <header className="mt-6 mb-10 space-y-3">
        <h1 className="text-4xl font-bold leading-tight text-balance">{post.title}</h1>
        <p className="font-mono text-xs text-muted-foreground">
          <time dateTime={post.date}>{formatDate(post.date, "long")}</time>
          {post.week !== undefined && <> · Week {post.week}</>}
          {" · "}{post.readingMinutes} min read
        </p>
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {post.tags.map((tag) => (
              <Badge variant="secondary" className="text-[10px]" key={tag}>{tag}</Badge>
            ))}
          </div>
        )}
      </header>

      <div
        className="prose prose-neutral dark:prose-invert max-w-none prose-a:underline-offset-4 prose-headings:scroll-mt-8 prose-pre:text-sm"
        dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
      />

      <nav className="mt-16 pt-6 border-t grid gap-4 sm:grid-cols-2 text-sm">
        {older ? (
          <Link href={`/blog/${older.slug}`} className="group">
            <span className="block font-mono text-xs text-muted-foreground">← Older</span>
            <span className="group-hover:underline underline-offset-4">{older.title}</span>
          </Link>
        ) : <span />}
        {newer && (
          <Link href={`/blog/${newer.slug}`} className="group sm:text-right">
            <span className="block font-mono text-xs text-muted-foreground">Newer →</span>
            <span className="group-hover:underline underline-offset-4">{newer.title}</span>
          </Link>
        )}
      </nav>
    </article>
  );
}
