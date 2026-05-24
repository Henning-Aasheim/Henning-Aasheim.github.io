'use client';

import { Link } from '@/i18n/navigation';
import { DarkMode } from "./darkmode";
import { useTranslations } from 'next-intl';
import LocaleSwitcher from './locale';


export default function Header() {
    const t = useTranslations('nav');


    return (
        <header className="w-screen border-b border-black/10 dark:border-white/70 py-6 px-1 sm:px-10">
            <nav className="flex items-center w-full">
                {/* Left spacer */}
                <div className="flex-1" />

                {/* Centered links */}
                <div className="flex mr-5 xs:mr-0 space-x-4 2xs:space-x-12 font-default justify-center text-base xs:text-xl">
                    <Link href='/' className="text-gray-800 dark:text-gray-300 font-bold hover:text-indigo-600 hover:scale-110">{t('home')}</Link>
                    <Link href='/about' className="text-gray-800 dark:text-gray-300 font-bold hover:text-indigo-600 hover:scale-110">{t('about')}</Link>
                    <Link href='/blog' className="text-gray-800 dark:text-gray-300 font-bold hover:text-indigo-600 hover:scale-110">{t('blog')}</Link>
                </div>
                
                <div className="flex-1 flex justify-end gap-5 sm:gap-8 items-center mr-2">
                    <LocaleSwitcher />
                    <DarkMode />
                </div>
            </nav>
        </header>
    );
}