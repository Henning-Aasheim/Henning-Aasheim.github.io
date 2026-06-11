import type { _Translator } from 'next-intl';
import type { YearValue, YearRange } from '@/types';

export type DateTranslator = _Translator<Record<string, any>, 'Date'>;

export function formatYear(
  tDate: DateTranslator,
  year: YearValue,
  options?: { approx?: boolean }
): string {
  const eraLabel = tDate(`era.${year.era}`); // "BCE", "紀元前", etc.
  const valueStr = year.value.toString();
  const approx = options?.approx ?? false;

  // Allow locales to define a special pattern for approx if they want
  const key = approx ? 'yearApprox' : 'year';

  return tDate(key, {
    approx: approx ? tDate('approx') : '',
    value: valueStr,
    era: eraLabel,
  });
}

export function formatYearRange(
  tDate: DateTranslator,
  range: YearRange
): string {
  const approx = range.approx ?? false;

  const startStr = formatYear(tDate, range.start, { approx });
  const endStr = formatYear(tDate, range.end, { approx: false });

  return tDate('yearRange', {
    start: startStr,
    end: endStr,
  });
}

export function formatBookYear(
  tDate: DateTranslator,
  opts: { year?: YearValue; yearRange?: YearRange }
): string | null {
  if (opts.year) return formatYear(tDate, opts.year);
  if (opts.yearRange) return formatYearRange(tDate, opts.yearRange);
  return null;
}