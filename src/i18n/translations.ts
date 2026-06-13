export interface TranslationSchema {
  [key: string]: string;
}

export type LangType = 'ru' | 'en';

export const translations: Record<LangType, TranslationSchema> = {
  ru: {
    // Nav
    'nav.about': 'О нас',
    'nav.projects': 'Проекты',
    'nav.pricing': 'Тарифы',
    'nav.contacts': 'Контакты',
    'nav.cta': 'Связаться',

    // Hero
    'hero.wave': '👋',
    'hero.title.1': 'Привет! Мы ',
    'hero.title.accent': 'MidnightProject',
    'hero.subtitle': 'Создаём инструменты, которые делают интернет быстрее, серверы — надёжнее, а жизнь — проще',
    'hero.cta.projects': 'Наши проекты',
    'hero.cta.contact': 'Связаться',

    // About
    'about.label': 'О проекте',
    'about.title': 'Кто мы такие?',
    'about.text': 'MidnightProject — это команда энтузиастов, которые создают технологии для людей. Мы работаем когда все спят, чтобы утром всё работало идеально. Наша цель — делать сложные вещи простыми и доступными каждому.',
    'about.stat1.number': '2+',
    'about.stat1.label': 'Проекта',
    'about.stat2.number': '24/7',
    'about.stat2.label': 'Поддержка',
    'about.stat3.number': '∞',
    'about.stat3.label': 'Амбиций',

    // Features
    'features.label': 'Проекты',
    'features.title': 'Над чем мы работаем',
    'features.description': 'Каждый наш проект — это ответ на реальную проблему. Вот что мы делаем прямо сейчас.',

    'feature1.title': 'Midnight InternetBooster',
    'feature1.status': 'Работает',
    'feature1.description': 'Ускорение интернет-соединения с помощью оптимизации маршрутов и умной маршрутизации трафика. Быстрый, стабильный и безопасный доступ к любым ресурсам.',
    'feature1.cta': 'Попробовать',
    'feature1.bullet1': '50+ локаций по всему миру',
    'feature1.bullet2': 'Оптимизация маршрутов до игровых серверов',
    'feature1.bullet3': 'Идеален для CS2, Minecraft и других онлайн-игр',
    'feature1.bullet4': 'Стабильный пинг и защищённое соединение',

    'feature2.title': 'Игровой хостинг',
    'feature2.status': 'В разработке',
    'feature2.description': 'Игровые серверы с удобной панелью управления Pterodactyl. Minecraft, CS2 и другие — запускай сервер за минуту с полным контролем.',
    'feature2.cta': 'Скоро',

    // Pricing
    'pricing.label': 'Тарифы',
    'pricing.title': 'Тарифные планы',
    'pricing.heading': 'Хостинг в бета-тестировании',
    'pricing.text': 'Игровой хостинг уже работает в закрытой бете. Свяжитесь с PortCreator для получения доступа.',
    'pricing.contact': 'Написать для бета-доступа',

    // Contacts
    'contacts.label': 'Контакты',
    'contacts.title': 'Свяжитесь с нами',
    'contacts.description': 'Есть вопросы, предложения или просто хотите поздороваться? Мы всегда на связи.',
    'contact.email.label': 'Email',
    'contact.tg.channel.label': 'Telegram канал',
    'contact.tg.dm.label': 'Telegram ЛС',
    'contact.discord.label': 'Discord',
    'contact.github.label': 'GitHub',

    // Footer
    'footer.copy': '© 2026 MidnightProject. Все права защищены.',
  },

  en: {
    // Nav
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.pricing': 'Pricing',
    'nav.contacts': 'Contacts',
    'nav.cta': 'Contact Us',

    // Hero
    'hero.wave': '👋',
    'hero.title.1': 'Hey! We are ',
    'hero.title.accent': 'MidnightProject',
    'hero.subtitle': 'Building tools that make the internet faster, servers more reliable, and life easier',
    'hero.cta.projects': 'Our Projects',
    'hero.cta.contact': 'Contact Us',

    // About
    'about.label': 'About',
    'about.title': 'Who are we?',
    'about.text': 'MidnightProject is a team of enthusiasts building technology for people. We work while everyone sleeps so that everything runs perfectly by morning. Our goal is to make complex things simple and accessible to everyone.',
    'about.stat1.number': '2+',
    'about.stat1.label': 'Projects',
    'about.stat2.number': '24/7',
    'about.stat2.label': 'Support',
    'about.stat3.number': '∞',
    'about.stat3.label': 'Ambitions',

    // Features
    'features.label': 'Projects',
    'features.title': 'What we\'re working on',
    'features.description': 'Every project we build is an answer to a real problem. Here\'s what we\'re doing right now.',

    'feature1.title': 'Midnight InternetBooster',
    'feature1.status': 'Live',
    'feature1.description': 'Speed up your internet connection with route optimization and smart traffic routing. Fast, stable, and secure access to any resources.',
    'feature1.cta': 'Try it',
    'feature1.bullet1': '50+ locations worldwide',
    'feature1.bullet2': 'Route optimization to game servers',
    'feature1.bullet3': 'Perfect for CS2, Minecraft and other online games',
    'feature1.bullet4': 'Stable ping and encrypted connection',

    'feature2.title': 'Game Hosting',
    'feature2.status': 'In Development',
    'feature2.description': 'Game servers with the intuitive Pterodactyl control panel. Minecraft, CS2 and more — launch a server in a minute with full control.',
    'feature2.cta': 'Coming soon',

    // Pricing
    'pricing.label': 'Pricing',
    'pricing.title': 'Pricing Plans',
    'pricing.heading': 'Hosting in Beta Testing',
    'pricing.text': 'Game hosting is already running in closed beta. Contact PortCreator to get access.',
    'pricing.contact': 'Write for beta access',

    // Contacts
    'contacts.label': 'Contacts',
    'contacts.title': 'Get in Touch',
    'contacts.description': 'Have questions, suggestions, or just want to say hi? We\'re always here.',
    'contact.email.label': 'Email',
    'contact.tg.channel.label': 'Telegram Channel',
    'contact.tg.dm.label': 'Telegram DM',
    'contact.discord.label': 'Discord',
    'contact.github.label': 'GitHub',

    // Footer
    'footer.copy': '© 2026 MidnightProject. All rights reserved.',
  }
};
