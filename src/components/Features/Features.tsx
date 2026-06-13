'use client';

import { useLang } from '@/context/LangContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Zap, Server, ArrowRight, Globe, Route, Gamepad2, ShieldCheck, Gauge, HardDrive } from 'lucide-react';
import Emoji from '@/components/Emoji/Emoji';
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
  { key: 'feature1.bullet5', icon: Gauge },
];

export default function Features() {
  const { t } = useLang();
  const revealHeader = useScrollReveal<HTMLDivElement>();
  const revealCard1 = useScrollReveal<HTMLDivElement>({ delay: 100 });
  const revealCard2 = useScrollReveal<HTMLDivElement>({ delay: 200 });
  const revealCard3 = useScrollReveal<HTMLDivElement>({ delay: 300 });

  return (
    <section className={styles.section} id="projects">
      <div className="container">
        <div className="reveal" ref={revealHeader}>
          <div className={styles.label}>{t('features.label')}</div>
          <h2 className={styles.title}>{t('features.title')}</h2>
          <p className={styles.description}>
            <Emoji symbol="🤔" size={24} className={styles.descriptionEmoji} />{' '}
            {t('features.description')}
          </p>
        </div>

        <div className={styles.grid}>
          {/* InternetBooster */}
          <div className={`${styles.card} reveal`} ref={revealCard1}>
            <div className={styles.cardHeader}>
              <div className={`${styles.cardIcon} ${styles.iconBooster}`}>
                <Zap size={24} />
              </div>
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
                href="https://t.me/midnightflow_bot"
                className={styles.btnPrimary}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('feature1.cta')}
                <ArrowRight size={16} className={styles.arrow} />
              </a>
              <a
                href="#pricing"
                className={styles.btnSecondary}
              >
                {t('feature1.cta2')}
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
              <a href="#pricing-hosting" className={styles.btnSecondary}>
                {t('feature2.cta')}
                <ArrowRight size={16} className={styles.arrow} />
              </a>
            </div>
          </div>

          {/* MidnightDrive */}
          <div className={`${styles.card} reveal`} ref={revealCard3}>
            <div className={styles.cardHeader}>
              <div className={`${styles.cardIcon} ${styles.iconDrive}`}>
                <HardDrive size={24} />
              </div>
              <span className={`${styles.badge} ${styles.badgeFrozen}`}>
                <span className={styles.dot} />
                {t('feature3.status')}
              </span>
            </div>
            <h3 className={styles.cardTitle}>{t('feature3.title')}</h3>
            <p className={styles.cardDescription}>{t('feature3.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
