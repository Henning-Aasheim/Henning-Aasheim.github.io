import { useTranslations } from 'next-intl';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { use } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { getAllBooks, sortBooksByDate } from '@/app/lib/books';
import Link from 'next/link';
import { formatBookYear } from '@/app/lib/yearFormat';

type Params = { locale: string };

// Metadata
export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('metaLibrary');

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function Library(
  { params }: { params: Promise<Params> }
) {
  const { locale } = use(params);

  setRequestLocale(locale);

  const t = useTranslations('library');
  const tDate = useTranslations('Date');       // <- for year formatting

  const books = sortBooksByDate(getAllBooks(locale));

  return (
    <div className="text-center pt-12">
      <h1 className="text-2xl 2xs:text-6xl md:text-[130px] mb-6 font-default font-bold w-4/5 xl:w-2/5 mx-auto">
        {t('title')}
      </h1>

      <p className="dropcap">{t('description')}</p>

      <h2 className="text-6xl">{t('books')}:</h2>

      <div className="w-10/11 md:w-4/5 mx-auto my-12">
        <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {books.map((book) => {
            const yearLabel = formatBookYear(tDate, {
              year: book.year,
              yearRange: book.yearRange,
            });

            return (
              <li key={book.id} className="inline-block mb-2">
                <div className="max-w-45 mx-auto">
                  <Link href={`/${locale}/library/${book.id}`} className="max-w-45 p-0">
                    <Image
                      src={book.image}
                      alt={book.title}
                      width={180}
                      height={270}
                      className="mx-auto"
                    />
                    <div className="max-w-45 mx-auto">
                      <h2 className="text-xl">{book.title}</h2>
                      <p>{book.author}</p>
                      {yearLabel && <p>{yearLabel}</p>}
                    </div>
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
