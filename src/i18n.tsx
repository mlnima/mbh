import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { indexT } from './data/i18nIndex';
import { partnershipT } from './data/i18nPartnership';

export type Lang = 'de' | 'en';

interface I18nContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  /** Plain (non-markup) text for the current language, for JSX children where
   *  dangerouslySetInnerHTML would be invalid. Falls back to the raw entry. */
  text: (dict: Record<number, [string, string]>, line: number) => string;
  /** Return DE or EN markup for the dictionary entry identified by the original
   *  PHP line number in the given page dictionary. Returns the raw HTML string. */
  tr: (dict: Record<number, [string, string]>, line: number) => string;
}

const I18nContext = createContext<I18nContextValue>({
  lang: 'de',
  setLang: () => {},
  tr: () => '',
  text: () => '',
});

export function useI18n() {
  return useContext(I18nContext);
}

export function detectLang(): Lang {
  const m = window.location.search.match(/[?&]lang=(de|en)/i);
  if (m) return m[1].toLowerCase() as Lang;
  try {
    const saved = localStorage.getItem('mb-lang');
    if (saved === 'de' || saved === 'en') return saved;
  } catch {
    /* ignore */
  }
  return 'de';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => detectLang());

  useEffect(() => {
    document.documentElement.lang = lang;
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.history.replaceState(null, '', url.pathname + url.search);
    try {
      localStorage.setItem('mb-lang', lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);

  const tr = (dict: Record<number, [string, string]>, line: number): string => {
    const e = dict[line];
    if (!e) return '';
    return lang === 'de' ? e[0] : e[1];
  };

  const text = (dict: Record<number, [string, string]>, line: number): string => {
    const e = dict[line];
    if (!e) return '';
    return stripTags(lang === 'de' ? e[0] : e[1]);
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, tr, text }}>
      {children}
    </I18nContext.Provider>
  );
}

/** Extract inner text of a markup dictionary entry, e.g.
 *  '<li ...><a ...>Über uns</a></li>' -> 'Über uns'. Entities are preserved. */
function stripTags(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}

export { indexT, partnershipT };
