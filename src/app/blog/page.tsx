import type { Metadata } from "next";
import Link from "next/link";
import PostList from "@/components/post-list";
import { getAllPosts } from "@/lib/posts";
import { Post } from "@/lib/types";

export const metadata: Metadata = {
  title: "Writing",
  description: "Weekly notes on what I'm learning and studying in software engineering.",
};

export default function BlogIndex() {
  const byYear = getAllPosts().reduce<Record<string, Post[]>>((acc, post) => {
    const year = post.date.slice(0, 4);
    (acc[year] ??= []).push(post);
    return acc;
  }, {});
  const years = Object.keys(byYear).sort().reverse();

  return (
    <div className="space-y-12 my-8 pb-20">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold">Writing</h1>
        <p className="text-muted-foreground leading-relaxed">
          Every week, something I&apos;ve learnt or studied in software
          engineering. Newest first.{" "}
          <Link href="/feed.xml" className="underline underline-offset-4">RSS</Link>
        </p>
      </header>

      {years.length === 0 && <PostList posts={[]} />}
      {years.map((year) => (
        <section key={year}>
          <h2 className="font-mono text-sm text-muted-foreground border-b pb-2 mb-4">{year}</h2>
          <PostList posts={byYear[year]} dateStyle="short" />
        </section>
      ))}
    </div>
  );
}
