# MidnightProject

> Официальный сайт MidnightProject — команды, которая создаёт технологии для людей.

## 🚀 Технологии

| Стек | Версия |
|:---|:---|
| [Next.js](https://nextjs.org/) (App Router, Turbopack) | 16.x |
| [React](https://react.dev/) | 19.x |
| [TypeScript](https://www.typescriptlang.org/) | 5.x |
| [Lucide React](https://lucide.dev/) | latest |
| CSS Modules + CSS Custom Properties | — |

## 📁 Структура

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout (шрифты, мета, i18n)
│   ├── page.tsx            # Главная страница
│   └── globals.css         # Дизайн-токены, reset, утилиты
│
├── components/             # React-компоненты
│   ├── Nav/                # Навигация (sticky, мобильное меню)
│   ├── Hero/               # Hero + typewriter-эффект
│   ├── About/              # О проекте + статистика
│   ├── Features/           # Карточки проектов
│   ├── Pricing/            # Тарифы / бета-доступ
│   ├── Contacts/           # Контактные карточки
│   └── Footer/             # Подвал
│
├── context/
│   └── LangContext.tsx     # i18n контекст (RU/EN)
│
├── hooks/
│   └── useScrollReveal.ts  # Scroll-reveal анимации
│
└── i18n/
    └── translations.ts     # Переводы RU/EN
```

## ⚡ Запуск

```bash
# Установка зависимостей
npm install

# Запуск dev-сервера
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

## 🔧 Команды 
<small>Больше полезных команд можете найти в <a href="package.json">package.json</a></small>

| Команда | Описание |
|:---|:---|
| `npm run dev` | Запуск dev-сервера |
| `npm run build` | Сборка сайта|
| `npm run start` | Запуск продакшен-сервера |

## 🌐 Локализация

Сайт поддерживает **русский** и **английский** языки. Язык определяется автоматически по `Accept-Language` заголовку и сохраняется в cookie `mp-lang`.


## 📬 Контакты

- **Email**: [EMAIL_ADDRESS]
- **Telegram owner**: [@portcreator_1](https://t.me/portcreator_1)
- **Discord Server**: [MidnightProject](https://discord.gg/midnightproject)
- **GitHub**: [project-midnight](https://github.com/project-midnight)