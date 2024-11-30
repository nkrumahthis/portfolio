import { useTheme } from "next-themes";
import { Moon, Sun } from 'lucide-react'


export function ThemeToggle() {
    const { setTheme, theme } = useTheme()

    return (
        <button
            className="inline-flex items-center text-sm font-medium rounded-full"
            onClick={() => setTheme(theme => theme === 'dark'? 'light' : 'dark')}
        >
            {theme === 'dark'? <Moon /> : <Sun />}
        </button>
    )
}