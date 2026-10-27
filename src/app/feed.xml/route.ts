import { getAllPosts } from "@/lib/posts";

export const dynamic = "force-static";

const SITE = "https://nkrumah.dev";

function escape(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function GET() {
  const items = getAllPosts()
    .map(
      (post) => `
    <item>
      <title>${escape(post.title)}</title>
      <link>${SITE}/blog/${post.slug}</link>
      <guid>${SITE}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escape(post.summary)}</description>
    </item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Emmanuel Nkrumah-Sarpong</title>
    <link>${SITE}/blog</link>
    <description>Weekly notes on what I'm learning in software engineering.</description>${items}
  </channel>
</rss>`;

  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
