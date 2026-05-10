'use client'

import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"

export function DarkMode () {
    const {theme, setTheme} = useTheme()

    return (
        <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-md"
            aria-label="Toggle darkmode">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    )
}