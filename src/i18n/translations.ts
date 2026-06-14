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
    'hero.subtitle': 'Мы создаём инструменты, которые делают жизнь проще, а интернет стабильнее.',
    'hero.cta.projects': 'Наши проекты',
    'hero.cta.contact': 'Связаться',

    // About
    'about.label': 'О нас',
    'about.title': 'Кто мы такие?', 
    'about.text': 'MidnightProject - небольшая команда энтузиастов, которая любит делать полезные сервисы для всех. Мы строим сервисы для тех, кто ценит скорость и стабильность.',
    'about.stat1.number': '3+',
    'about.stat1.label': 'Проекта',
    'about.stat2.number': '24/7',
    'about.stat2.label': 'Поддержка',
    'about.stat3.number': '∞',
    'about.stat3.label': 'Амбиций', // maybe "возможностей" or something else 

    // Features
    'features.label': 'Проекты',
    'features.title': 'Над чем мы работаем',
    'features.description': 'Каждый наш проект - это ответ на реальную проблему. Вот чем мы занимаемся прямо сейчас:',

    'feature1.title': 'Midnight Flow',
    'feature1.status': 'Работает',
    'feature1.description': 'Оптимизация маршрутов и умная маршрутизация трафика для быстрого и стабильного интернет-соединения. Минимальный пинг, максимальная скорость!',
    'feature1.cta': 'Подробнее',
    'feature1.cta2': 'Тарифы',
    'feature1.bullet1': '50+ локаций по всему миру',
    'feature1.bullet2': 'Оптимизация маршрутов до игровых серверов, без потери пакетов и скорости',
    'feature1.bullet3': 'Идеален для CS2, Valorant, Dota2 и других онлайн-игр, требующие низкий пинг и высокую скорость реакции!',
    'feature1.bullet4': 'Стабильный пинг и надёжное соединение',
    'feature1.bullet5': 'Гарантированная скорость интернета до 500 мбит/с',

    'feature2.title': 'Игровой хостинг',
    'feature2.status': 'В бета-тестировании',
    'feature2.description': 'Игровые серверы с удобной панелью управления Pterodactyl. Minecraft, CS2 и другие игры — запускай сервер за минуту с полным контролем.',
    'feature2.cta': 'Подробнее',

    'feature3.title': 'MidnightDrive',
    'feature3.status': 'Заморожен',
    'feature3.description': 'Облачное хранилище на базе NextCloud. Храни файлы, делись и синхронизируй между устройствами.',

    // Pricing
    'pricing.label': 'Тарифы',
    'pricing.title': 'Тарифные планы',
    'pricing.tab.booster': 'Midnight Flow',
    'pricing.tab.hosting': 'Хостинг',

    // Booster plan
    'pricing.booster.plan.name': 'Midnight Flow',
    'pricing.booster.plan.price': '165 ₽',
    'pricing.booster.plan.period': '/ мес',
    'pricing.booster.plan.feat1': '50+ локаций + 5 для мобильного интернета',
    'pricing.booster.plan.feat2': 'Скорость до 500 Мбит/с',
    'pricing.booster.plan.feat3': 'До 5 устройств',
    'pricing.booster.plan.feat4': 'Оптимизация соединения с игровыми серверами',
    'pricing.booster.plan.feat5': 'Поддержка 24/7',
    'pricing.booster.plan.cta': 'Перейти в бота',

    'pricing.booster.note': 'Подробнее про тарифы и Midnight Flow — в нашем',
    'pricing.booster.note.link': 'Telegram-боте',

    // Hosting pricing
    'pricing.hosting.heading': 'Хостинг в бета-тестировании',
    'pricing.hosting.text': 'MidnightHosting уже работает в закрытой бете. Свяжитесь с PortCreator для получения доступа.',
    'pricing.hosting.contact': 'Написать для бета-доступа',

    // Contacts
    'contacts.label': 'Контакты',
    'contacts.title': 'Свяжитесь с нами',
    'contacts.description': 'Есть вопросы, предложения или просто хотите пообщаться? Напишите нам!',
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

    'feature1.title': 'Midnight Flow',
    'feature1.status': 'Live',
    'feature1.description': 'Route optimization and smart traffic routing for a fast, stable internet connection. Minimum ping, maximum speed!',
    'feature1.cta': 'Learn more',
    'feature1.cta2': 'Pricing',
    'feature1.bullet1': '50+ locations worldwide',
    'feature1.bullet2': 'Route optimization to game servers',
    'feature1.bullet3': 'Perfect for CS2, Minecraft and other online games',
    'feature1.bullet4': 'Stable ping and reliable connection',
    'feature1.bullet5': 'Up to 500 Mbps',

    'feature2.title': 'Game Hosting',
    'feature2.status': 'In Development',
    'feature2.description': 'Game servers with the intuitive Pterodactyl control panel. Minecraft, CS2 and more — launch a server in a minute with full control.',
    'feature2.cta': 'Learn more',

    'feature3.title': 'MidnightDrive',
    'feature3.status': 'Frozen',
    'feature3.description': 'Cloud storage powered by NextCloud. Store files, share and sync across all your devices.',

    // Pricing
    'pricing.label': 'Pricing',
    'pricing.title': 'Pricing Plans',
    'pricing.tab.booster': 'Midnight Flow',
    'pricing.tab.hosting': 'Hosting',

    // Booster plan
    'pricing.booster.plan.name': 'Midnight Flow',
    'pricing.booster.plan.price': '$1.99',
    'pricing.booster.plan.period': '/ mo',
    'pricing.booster.plan.feat1': 'All available locations',
    'pricing.booster.plan.feat2': 'Maximum speed',
    'pricing.booster.plan.feat3': '5 devices',
    'pricing.booster.plan.feat4': 'Gaming optimization',
    'pricing.booster.plan.feat5': '24/7 support',
    'pricing.booster.plan.cta': 'Get Started',

    'pricing.booster.note': 'Learn more about plans and Midnight Flow in our',
    'pricing.booster.note.link': 'Telegram bot',

    // Hosting pricing
    'pricing.hosting.heading': 'Hosting in Beta Testing',
    'pricing.hosting.text': 'Game hosting is already running in closed beta. Contact PortCreator to get access.',
    'pricing.hosting.contact': 'Write for beta access',

    // Contacts
    'contacts.label': 'Contacts',
    'contacts.title': 'Get in Touch',
    'contacts.description': 'Have questions, suggestions, or just want to say hi? Write to us!',
    'contact.email.label': 'Email',
    'contact.tg.channel.label': 'Telegram Channel',
    'contact.tg.dm.label': 'Telegram DM',
    'contact.discord.label': 'Discord',
    'contact.github.label': 'GitHub',

    // Footer
    'footer.copy': '© 2026 MidnightProject. All rights reserved.',
  }
};
