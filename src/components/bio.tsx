import { GlobeIcon, MailIcon, PhoneIcon } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { DevToIcon } from './icons/DevToIcon'
import { XIcon } from './icons/XIcon'
import { LinkedInIcon } from './icons/LinkedInIcon'
import { GitHubIcon } from './icons/GitHubIcon'

export default function Bio() {
    return (
        <div className="flex-1 space-y-1.5">
            <h1 className="text-4xl font-bold">Emmanuel Nkrumah-Sarpong</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground  light:text-amber-400">
                <span className="dark:text-yellow-400 text-amber-600 text-y-400">Fullstack Software Engineer,</span> 6+ years of experience.
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
                <a
                    className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                    href="https://www.google.com/search?q=accra"
                    target="_blank"
                >
                    <GlobeIcon className="size-3" />
                    Accra, Ghana GMT+0
                </a>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">

                <Button
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                >
                    <a href={`mailto:nkrumahthis@gmail.com`}>
                        <MailIcon className="size-4" />
                    </a>
                </Button>


                <Button
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                >
                    <a href={`tel:233242359842`}>
                        <PhoneIcon className="size-4" />
                    </a>
                </Button>

                {[
                    {
                        name: "GitHub",
                        url: "https://github.com/nkrumahthis",
                        icon: GitHubIcon,
                    },
                    {
                        name: "LinkedIn",
                        url: "https://www.linkedin.com/in/nkrumahthis/",
                        icon: LinkedInIcon,
                    },
                    {
                        name: "X",
                        url: "https://x.com/nkrumahthis",
                        icon: XIcon,
                    },
                    {
                        name: "Dev.to",
                        url: "https://dev.to/nkrumahthis",
                        icon: DevToIcon,
                    },
                ].map((social) => (
                    <Button
                        key={social.name}
                        className="size-8"
                        variant="outline"
                        size="icon"
                        asChild
                    >
                        <a href={social.url}>
                            <social.icon className="size-4" />
                        </a>
                    </Button>
                ))}
            </div>
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">

                <a href={`mailto:nkrumahthis@gmail.com`}>
                    <span className="underline">nkrumahthis@gmail.com</span>
                </a>

                <a href={`tel:233242359842`}>
                    <span className="underline">+233242359842</span>
                </a>

            </div>
        </div>
    )
}
