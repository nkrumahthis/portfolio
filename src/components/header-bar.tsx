"use client"

import React from 'react'
import { ThemeToggle } from './theme-toggle'
import Bio from './bio'

export default function HeaderBar() {
    return (
        <header className="py-6 flex justify-between items-start">
            <ThemeToggle />
        </header>
    )
}
