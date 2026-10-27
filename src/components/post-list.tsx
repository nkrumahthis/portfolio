import Link from 'next/link'
import { Post } from '@/lib/types'
import { formatDate } from '@/lib/posts'

interface PostListProps {
    posts: Post[]
    showSummary?: boolean
    dateStyle?: "short" | "long"
}

export default function PostList({ posts, showSummary = false, dateStyle = "long" }: PostListProps) {
    if (posts.length === 0) {
        return <p className="text-sm text-muted-foreground font-mono">Nothing here yet.</p>
    }

    return (
        <ul className="space-y-4">
            {posts.map(post => (
                <li key={post.slug}>
                    <Link href={`/blog/${post.slug}`} className="group flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
                        <time
                            dateTime={post.date}
                            className="shrink-0 font-mono text-xs text-muted-foreground tabular-nums sm:w-28"
                        >
                            {formatDate(post.date, dateStyle)}
                        </time>
                        <span>
                            <span className="font-medium group-hover:underline underline-offset-4">
                                {post.title}
                            </span>
                            {post.draft && (
                                <span className="ml-2 font-mono text-[10px] uppercase text-destructive">draft</span>
                            )}
                            {showSummary && post.summary && (
                                <span className="block text-sm text-muted-foreground mt-1">{post.summary}</span>
                            )}
                        </span>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
