"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from './theme-toggle'
import { cn } from '@/lib/utils'

const NAV = [
    { href: "/blog", label: "Writing" },
    { href: "/#projects", label: "Projects" },
    { href: "/cv", label: "CV" },
]

export default function HeaderBar() {
    const pathname = usePathname()

    return (
        <header className="py-6 flex justify-between items-center print:hidden">
            <Link href="/" aria-label="Home">
                <Image className="border-2 border-white rounded-md" src="/icon-32x32.png" alt="ens" width="32" height="32" />
            </Link>
            <nav className="flex items-center gap-5 font-mono text-sm">
                {NAV.map(({ href, label }) => (
                    <Link
                        key={href}
                        href={href}
                        className={cn(
                            "text-muted-foreground hover:text-foreground transition-colors",
                            pathname.startsWith(href) && "text-foreground font-semibold"
                        )}
                    >
                        {label}
                    </Link>
                ))}
                <ThemeToggle />
            </nav>
        </header>
    )
}
