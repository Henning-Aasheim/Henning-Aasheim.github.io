import type { _Translator } from 'next-intl';
import type { YearValue, YearRange } from '@/types';

export type DateTranslator = _Translator<Record<string, any>, 'Date'>;

export function formatYear(
  tDate: DateTranslator,
  year: YearValue,
  options?: { approx?: boolean }
): string {
  const eraLabel = tDate(`era.${year.era}`);
  const valueStr = year.value.toString();

  // Approx if:
  // - options says so, OR
  // - the YearValue itself has approx: true
  const approx = options?.approx ?? !!year.approx;

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
  // Range is approx if:
  // - range.approx is true, OR
  // - start.approx is true
  const approx = !!(range.approx || range.start.approx);

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