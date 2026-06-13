'use client';

import { useState, useEffect } from 'react';
import { useLang } from '@/context/LangContext';
import { ArrowDown, MessageCircle } from 'lucide-react';
import styles from './Hero.module.css';

const WORDS = ['Project', 'Hosting', 'Booster', 'Drive'];
const TYPE_SPEED = 100;
const DELETE_SPEED = 60;
const PAUSE_AFTER_TYPE = 2200;
const PAUSE_AFTER_DELETE = 400;

function useTypewriter(words: string[]) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (!isDeleting && displayed === currentWord) {
      const timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayed === '') {
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, PAUSE_AFTER_DELETE);
      return () => clearTimeout(timeout);
    }

    const speed = isDeleting ? DELETE_SPEED : TYPE_SPEED;
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayed(currentWord.slice(0, displayed.length - 1));
      } else {
        setDisplayed(currentWord.slice(0, displayed.length + 1));
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex, words]);

  return displayed;
}

export default function Hero() {
  const { t } = useLang();
  const typedWord = useTypewriter(WORDS);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.glow} />
      <div className={styles.glowSecondary} />
      <div className="container">
        <div className={styles.content}>
          <div className={`${styles.wave} emoji`}>{t('hero.wave')}</div>
          <h1 className={styles.title}>
            {t('hero.title.1')}
            <span className={styles.brandName} suppressHydrationWarning>
              <span className={styles.brandStatic}>Midnight</span>
              <span className={styles.brandDynamic} suppressHydrationWarning>{typedWord}</span>
              <span className={styles.cursor}>|</span>
            </span>
          </h1>
          <p className={styles.subtitle}>{t('hero.subtitle')}</p>
          <div className={styles.actions}>
            <a
              href="#projects"
              className={styles.btnPrimary}
              onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}
            >
              {t('hero.cta.projects')}
              <ArrowDown size={16} className={styles.arrow} />
            </a>
            <a
              href="#contacts"
              className={styles.btnSecondary}
              onClick={(e) => { e.preventDefault(); scrollTo('contacts'); }}
            >
              <MessageCircle size={16} />
              {t('hero.cta.contact')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
