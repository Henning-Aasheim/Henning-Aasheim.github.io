'use client';

import { useTranslations } from "next-intl";

export default function Footer() {

    const t = useTranslations('footer');

    return (
    <footer className="text-sm sm:text-base mt-auto border-t border-black/10 dark:border-white/70 px-6 py-6 text-center font-default">
        {t('copyright')}<br />
        {t('description')}
    </footer>

    );
}