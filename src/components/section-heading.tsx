import Link from 'next/link'

interface SectionHeadingProps {
    children: React.ReactNode
    href?: string
    linkLabel?: string
}

export default function SectionHeading({ children, href, linkLabel }: SectionHeadingProps) {
    return (
        <div className="flex items-baseline justify-between border-b pb-2 mb-6">
            <h2 className="text-2xl font-bold dark:text-yellow-400 text-yellow-700">{children}</h2>
            {href && (
                <Link href={href} className="font-mono text-xs text-muted-foreground hover:text-foreground hover:underline">
                    {linkLabel} →
                </Link>
            )}
        </div>
    )
}
