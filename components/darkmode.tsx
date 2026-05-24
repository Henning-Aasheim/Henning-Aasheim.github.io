'use client'

import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"

export function DarkMode () {
    const {theme, setTheme} = useTheme()

    return (
        <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="cursor-pointer"
            aria-label="Toggle darkmode">
            {theme === 'dark' ? <Sun size={25} className="hover:text-indigo-600"/> : <Moon size={25} className="hover:text-indigo-600"/>}
        </button>
    )
}