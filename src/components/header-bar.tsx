"use client"

import React from 'react'
import { ThemeToggle } from './theme-toggle'

export default function HeaderBar() {
    return (
        <header className="py-6 flex justify-between items-center">
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold">Nkrumah's Portfolio</h1>
                <p className="text-muted-foreground">Fullstack Software Engineer</p>
            </div>
            <ThemeToggle />
        </header>
    )
}
