'use client';

import { useTranslations } from 'next-intl';

export default function Header() {
    const t = useTranslations('warning');

    return (
        <div className='bg-yellow-400 border-b-2 border-black'>
            <h1 className='font-bold py-4 mx-auto'>{t('warning')}</h1>
        </div>
    );
}

