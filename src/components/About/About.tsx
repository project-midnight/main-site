'use client';

import { useLang } from '@/context/LangContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Rocket, HeadphonesIcon, Sparkles } from 'lucide-react';
import styles from './About.module.css';
import React from 'react';

interface StatItem {
  number: string;
  label: string;
  icon: React.ComponentType<{ size?: number }>;
}

export default function About() {
  const { t } = useLang();
  const revealContent = useScrollReveal<HTMLDivElement>();
  const revealStats = useScrollReveal<HTMLDivElement>();

  const stats: StatItem[] = [
    { number: 'about.stat1.number', label: 'about.stat1.label', icon: Rocket },
    { number: 'about.stat2.number', label: 'about.stat2.label', icon: HeadphonesIcon },
    { number: 'about.stat3.number', label: 'about.stat3.label', icon: Sparkles },
  ];

  return (
    <section className={styles.section} id="about">
      <div className="container">
        <div className={`${styles.content} reveal`} ref={revealContent}>
          <div className={styles.label}>{t('about.label')}</div>
          <h2 className={styles.title}>{t('about.title')}</h2>
          <p className={styles.text}>{t('about.text')}</p>
        </div>

        <div className={`${styles.stats} reveal`} ref={revealStats}>
          {stats.map(({ number, label, icon: Icon }) => (
            <div className={styles.statCard} key={number}>
              <div className={styles.statIcon}>
                <Icon size={24} />
              </div>
              <div className={`${styles.statNumber} gradient-text`}>{t(number)}</div>
              <div className={styles.statLabel}>{t(label)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
