'use client';

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { translations, LangType } from '@/i18n/translations';

interface LangContextProps {
  lang: LangType;
  setLang: (newLang: LangType) => void;
  t: (key: string) => string;
  mounted: boolean;
}

const LangContext = createContext<LangContextProps | null>(null);

interface LangProviderProps {
  children: ReactNode;
  initialLang?: LangType;
}

export function LangProvider({ children, initialLang }: LangProviderProps) {
  const [lang, setLangState] = useState<LangType>(initialLang || 'en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('mp-lang') as LangType | null;
    if (saved && translations[saved]) {
      if (saved !== lang) {
        setLangState(saved);
        document.documentElement.lang = saved;
      }
    } else {
      localStorage.setItem('mp-lang', lang);
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = useCallback((newLang: LangType) => {
    if (translations[newLang]) {
      setLangState(newLang);
      localStorage.setItem('mp-lang', newLang);
      document.documentElement.lang = newLang;
      document.cookie = `mp-lang=${newLang}; path=/; max-age=31536000; SameSite=Lax`;
    }
  }, []);

  const t = useCallback((key: string): string => {
    return translations[lang]?.[key] || translations['en']?.[key] || key;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t, mounted }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): LangContextProps {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error('useLang must be used within a LangProvider');
  }
  return context;
}
