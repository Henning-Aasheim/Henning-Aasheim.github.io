import Link from "next/link";

export default function Header() {
    return (
        <header className="flex border-b border-black/10 w-screen py-6 justify-center">
            <nav className="flex space-x-12 font-playfair justify-center items-center">
                <Link href='/' className="text-gray-800 font-medium">Home</Link>
                <Link href='/about' className="text-gray-800 font-medium">About</Link>
                <Link href='/blog' className="text-gray-800 font-medium">Blog</Link>
            </nav>
        </header>
    );
}