import Link from "next/link";
import { DarkMode } from "./darkmode";

export default function Header() {
    return (
        <header className="w-screen border-b border-black/10 dark:border-white/70 py-6 px-10">
            <nav className="flex items-center w-full">
                {/* Left spacer */}
                <div className="flex-1" />

                {/* Centered links */}
                <div className="flex space-x-12 font-playfair justify-center text-xl">
                    <Link href='/' className="text-gray-800 dark:text-gray-300 font-medium">Home</Link>
                    <Link href='/about' className="text-gray-800 dark:text-gray-300 font-medium">About</Link>
                    <Link href='/blog' className="text-gray-800 dark:text-gray-300 font-medium">Blog</Link>
                </div>
                <div className="flex-1 flex justify-end"><DarkMode /></div>
            </nav>
        </header>
    );
}