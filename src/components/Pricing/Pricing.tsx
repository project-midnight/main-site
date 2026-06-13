'use client';

import { useState, useEffect } from 'react';
import { useLang } from '@/context/LangContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Check, Mail, Zap, Server } from 'lucide-react';
import Emoji from '@/components/Emoji/Emoji';
import styles from './Pricing.module.css';
import React from 'react';

interface IconProps {
  size?: number;
}

function TelegramIcon({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

function DiscordIcon({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.947 2.418-2.157 2.418z" />
    </svg>
  );
}

interface BetaContactItem {
  href: string;
  icon: React.ComponentType<IconProps>;
  label: string;
}

const betaContacts: BetaContactItem[] = [
  { href: 'https://discord.gg/heaqDH2uSD', icon: DiscordIcon, label: 'Discord' },
  { href: 'https://t.me/portcreator_1', icon: TelegramIcon, label: 'Telegram' },
  { href: 'mailto:portcreator@midnight-project.space', icon: Mail, label: 'Email' },
];

const boosterFeatures = [
  'pricing.booster.plan.feat1',
  'pricing.booster.plan.feat2',
  'pricing.booster.plan.feat3',
  'pricing.booster.plan.feat4',
  'pricing.booster.plan.feat5',
];

type Tab = 'booster' | 'hosting';

export default function Pricing() {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState<Tab>('booster');
  const revealHeader = useScrollReveal<HTMLDivElement>();

  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === '#pricing-hosting') {
        setActiveTab('hosting');
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  return (
    <section className={styles.section} id="pricing">
      <div className="container">
        <div className="reveal" ref={revealHeader}>
          <div className={styles.label}>{t('pricing.label')}</div>
          <h2 className={styles.title}>{t('pricing.title')}</h2>

          <div className={styles.toggle}>
            <button
              className={`${styles.toggleBtn} ${activeTab === 'booster' ? styles.toggleBtnActive : ''}`}
              onClick={() => setActiveTab('booster')}
            >
              <Zap size={14} style={{ marginRight: 6, verticalAlign: 'middle' }} />
              {t('pricing.tab.booster')}
            </button>
            <button
              className={`${styles.toggleBtn} ${activeTab === 'hosting' ? styles.toggleBtnActive : ''}`}
              onClick={() => setActiveTab('hosting')}
            >
              <Server size={14} style={{ marginRight: 6, verticalAlign: 'middle' }} />
              {t('pricing.tab.hosting')}
            </button>
          </div>
        </div>

        {activeTab === 'booster' && (
          <div className={styles.tabContent} key="booster">
            <div className={styles.singlePlanWrapper}>
              <div className={`${styles.planCard} ${styles.planSingle}`}>
                <div className={styles.planName}>{t('pricing.booster.plan.name')}</div>
                <div className={styles.planPriceRow}>
                  <span className={styles.planPrice}>{t('pricing.booster.plan.price')}</span>
                  <span className={styles.planPeriod}>{t('pricing.booster.plan.period')}</span>
                </div>
                <div className={styles.planFeatures}>
                  {boosterFeatures.map((key) => (
                    <div key={key} className={styles.planFeat}>
                      <span className={styles.planFeatIcon}>
                        <Check size={12} />
                      </span>
                      {t(key)}
                    </div>
                  ))}
                </div>
                <a
                  href="https://t.me/midnightflow_bot"
                  className={`${styles.planCta} ${styles.planCtaPrimary}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('pricing.booster.plan.cta')}
                </a>
              </div>
            </div>
            <p className={styles.boosterNote}>
              {t('pricing.booster.note')}{' '}
              <a
                href="https://t.me/midnightflow_bot"
                className={styles.boosterNoteLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('pricing.booster.note.link')} →
              </a>
            </p>
          </div>
        )}

        {activeTab === 'hosting' && (
          <div className={styles.tabContent} key="hosting">
            <div className={styles.placeholder}>
              <div className={styles.icon}><Emoji symbol="🧪" size={58} /></div>
              <h3 className={styles.heading}>{t('pricing.hosting.heading')}</h3>
              <p className={styles.text}>{t('pricing.hosting.text')}</p>

              <div className={styles.contactLabel}>{t('pricing.hosting.contact')}</div>
              <div className={styles.contacts}>
                {betaContacts.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    className={styles.contactBtn}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <Icon size={18} />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
