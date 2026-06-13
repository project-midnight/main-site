'use client';

import { useLang } from '@/context/LangContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Zap, Server, ArrowRight, Clock, Globe, Route, Gamepad2, ShieldCheck } from 'lucide-react';
import styles from './Features.module.css';
import React from 'react';

interface BulletItem {
  key: string;
  icon: React.ComponentType<{ size?: number }>;
}

const boosterBullets: BulletItem[] = [
  { key: 'feature1.bullet1', icon: Globe },
  { key: 'feature1.bullet2', icon: Route },
  { key: 'feature1.bullet3', icon: Gamepad2 },
  { key: 'feature1.bullet4', icon: ShieldCheck },
];

export default function Features() {
  const { t } = useLang();
  const revealHeader = useScrollReveal<HTMLDivElement>();
  const revealCard1 = useScrollReveal<HTMLDivElement>();
  const revealCard2 = useScrollReveal<HTMLDivElement>();

  return (
    <section className={styles.section} id="projects">
      <div className="container">
        <div className="reveal" ref={revealHeader}>
          <div className={styles.label}>{t('features.label')}</div>
          <h2 className={styles.title}>{t('features.title')}</h2>
          <p className={styles.description}>{t('features.description')}</p>
        </div>

        <div className={styles.grid}>
          {/* InternetBooster */}
          <div className={`${styles.card} reveal`} ref={revealCard1}>
            <div className={styles.cardHeader}>
              <div className={`${styles.cardIcon} ${styles.iconBooster}`}>
                <Zap size={24} />
              </div>
              <span className={`${styles.badge} ${styles.badgeActive}`}>
                <span className={`${styles.dot} ${styles.dotPulse}`} />
                {t('feature1.status')}
              </span>
            </div>
            <h3 className={styles.cardTitle}>{t('feature1.title')}</h3>
            <p className={styles.cardDescription}>{t('feature1.description')}</p>

            <ul className={styles.bullets}>
              {boosterBullets.map(({ key, icon: Icon }) => (
                <li key={key} className={styles.bullet}>
                  <span className={styles.bulletIcon}>
                    <Icon size={15} />
                  </span>
                  {t(key)}
                </li>
              ))}
            </ul>

            <div className={styles.cardAction}>
              <a
                href="https://internet-booster.midnight-project.space"
                className={styles.btnPrimary}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('feature1.cta')}
                <ArrowRight size={16} className={styles.arrow} />
              </a>
            </div>
          </div>

          {/* Game Hosting */}
          <div className={`${styles.card} reveal`} ref={revealCard2}>
            <div className={styles.cardHeader}>
              <div className={`${styles.cardIcon} ${styles.iconHosting}`}>
                <Server size={24} />
              </div>
              <span className={`${styles.badge} ${styles.badgeWip}`}>
                <span className={styles.dot} />
                {t('feature2.status')}
              </span>
            </div>
            <h3 className={styles.cardTitle}>{t('feature2.title')}</h3>
            <p className={styles.cardDescription}>{t('feature2.description')}</p>
            <div className={styles.cardAction}>
              <span className={styles.btnDisabled}>
                <Clock size={14} />
                {t('feature2.cta')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
