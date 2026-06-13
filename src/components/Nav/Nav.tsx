'use client';

import { useState, useEffect, useCallback } from 'react';
import { useLang } from '@/context/LangContext';
import { MessageCircle } from 'lucide-react';
import styles from './Nav.module.css';

interface NavLink {
  id: string;
  key: string;
}

export default function Nav() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 72;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setMobileOpen(false);
  }, []);

  const toggleMobile = useCallback(() => {
    setMobileOpen(prev => {
      document.body.style.overflow = !prev ? 'hidden' : '';
      return !prev;
    });
  }, []);

  const navLinks: NavLink[] = [
    { id: 'about', key: 'nav.about' },
    { id: 'projects', key: 'nav.projects' },
    { id: 'pricing', key: 'nav.pricing' },
    { id: 'contacts', key: 'nav.contacts' },
  ];

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} id="navbar">
        <div className={styles.inner}>
          <a href="#" className={styles.logo} onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <img src="/favicon.png" alt="MP" className={styles.logoIcon} />
            <span className={styles.logoAccent}>Midnight</span>
            <span>Project</span>
          </a>

          <div className={styles.links}>
            {navLinks.map(({ id, key }) => (
              <a
                key={id}
                className={styles.link}
                onClick={(e) => { e.preventDefault(); scrollTo(id); }}
                href={`#${id}`}
              >
                {t(key)}
              </a>
            ))}
          </div>

          <div className={styles.actions}>
            <div className={styles.langSwitcher}>
              <button
                className={`${styles.langBtn} ${lang === 'ru' ? styles.langBtnActive : ''}`}
                onClick={() => setLang('ru')}
              >
                RU
              </button>
              <button
                className={`${styles.langBtn} ${lang === 'en' ? styles.langBtnActive : ''}`}
                onClick={() => setLang('en')}
              >
                EN
              </button>
            </div>

            <a
              href="#contacts"
              className={styles.cta}
              onClick={(e) => { e.preventDefault(); scrollTo('contacts'); }}
            >
              <MessageCircle size={16} />
              {t('nav.cta')}
            </a>

            <button className={styles.burger} onClick={toggleMobile} aria-label="Menu">
              <span style={mobileOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
              <span style={mobileOpen ? { opacity: 0 } : {}} />
              <span style={mobileOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`}>
        {navLinks.map(({ id, key }) => (
          <a
            key={id}
            className={styles.mobileLink}
            onClick={(e) => { e.preventDefault(); scrollTo(id); }}
            href={`#${id}`}
          >
            {t(key)}
          </a>
        ))}
        <div className={styles.langSwitcher} style={{ marginTop: '16px' }}>
          <button
            className={`${styles.langBtn} ${lang === 'ru' ? styles.langBtnActive : ''}`}
            onClick={() => setLang('ru')}
          >
            RU
          </button>
          <button
            className={`${styles.langBtn} ${lang === 'en' ? styles.langBtnActive : ''}`}
            onClick={() => setLang('en')}
          >
            EN
          </button>
        </div>
      </div>
    </>
  );
}
