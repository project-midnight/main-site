import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import { cookies, headers } from 'next/headers';
import { LangProvider } from '@/context/LangContext';
import { LangType } from '@/i18n/translations';
import { Metadata } from 'next';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-label',
});

export const metadata: Metadata = {
  title: 'MidnightProject',
  description: 'MidnightProject Website',
  metadataBase: new URL('https://midnight-project.space'),
  openGraph: {
    title: 'MidnightProject',
    description: 'MidnightProject Website',
    url: 'https://midnight-project.space',
    siteName: 'MidnightProject',
    type: 'website',
  },
  icons: {
    icon: '/favicon.png',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const cookieStore = await cookies();
  const headersList = await headers();

  let initialLang: LangType = 'en';
  const saved = cookieStore.get('mp-lang')?.value;
  if (saved && (saved === 'ru' || saved === 'en')) {
    initialLang = saved as LangType;
  } else {
    const acceptLanguage = headersList.get('accept-language') || '';
    if (acceptLanguage.toLowerCase().startsWith('ru') || acceptLanguage.toLowerCase().includes('ru-')) {
      initialLang = 'ru';
    }
  }

  return (
    <html lang={initialLang} className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
        <LangProvider initialLang={initialLang}>
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
