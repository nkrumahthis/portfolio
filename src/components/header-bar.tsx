"use client"

import React from 'react'
import { ThemeToggle } from './theme-toggle'
import Bio from './bio'
import Image from 'next/image'

export default function HeaderBar() {
    return (
        <header className="py-6 flex justify-between items-start">
            <Image className="border-2 border-white rounded-md" src="/icon-32x32.png" alt="ens" width="32" height="32" />
            <ThemeToggle />
        </header>
    )
}
