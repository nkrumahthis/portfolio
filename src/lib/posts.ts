import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { Post } from "./types";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");
const WORDS_PER_MINUTE = 220;

function readPost(filename: string): Post {
    const slug = filename.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf8");
    const { data, content } = matter(raw);
    const words = content.trim().split(/\s+/).length;

    return {
        slug,
        title: data.title,
        date: new Date(data.date).toISOString(),
        summary: data.summary ?? "",
        tags: data.tags ?? [],
        week: data.week,
        popular: data.popular ?? false,
        draft: data.draft ?? false,
        readingMinutes: Math.max(1, Math.round(words / WORDS_PER_MINUTE)),
        content,
    };
}

// Newest first. Drafts are only shown when running `npm run dev`.
export function getAllPosts(): Post[] {
    if (!fs.existsSync(POSTS_DIR)) return [];
    return fs
        .readdirSync(POSTS_DIR)
        .filter((f) => f.endsWith(".md"))
        .map(readPost)
        .filter((p) => process.env.NODE_ENV === "development" || !p.draft)
        .sort((a, b) => b.date.localeCompare(a.date));
}

// Posts marked `popular: true` in frontmatter, newest first.
export function getPopularPosts(limit = 5): Post[] {
    return getAllPosts().filter((p) => p.popular).slice(0, limit);
}

export function getPost(slug: string): Post | undefined {
    return getAllPosts().find((p) => p.slug === slug);
}

export function renderMarkdown(markdown: string): string {
    return marked.parse(markdown, { async: false });
}

export function formatDate(iso: string, style: "short" | "long" = "short"): string {
    return new Date(iso).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: style === "long" ? "numeric" : undefined,
        timeZone: "UTC",
    });
}
