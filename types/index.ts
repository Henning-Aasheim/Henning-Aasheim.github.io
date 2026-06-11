export interface ArticlePost {
    id: string
    title: string
    date: string
}

export interface ArticleItem {
    image: string
    category: string
    title: string
    author: string
    date: string
    language: string
}

export type Era = 'BCE'|'CE'

export type YearValue = {
  value: number; // 1, 2, 3, ... always positive
  era: Era;
};

export type YearRange = {
  start: YearValue;
  end: YearValue;
  approx?: boolean;
};

export type BookMeta = {
    id: string
    title: string
    author: string
    date: string
    translator?: string[]
    image: string
    year?: YearValue
    yearRange?: YearRange
}

export type Book = BookMeta & {
    content: string
}