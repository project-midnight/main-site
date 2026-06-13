<p align="center">
  <img src="./public/assets/banner.png" alt="MidnightProject Banner" width="100%" />
</p>

<h1 align="center">MidnightProject</h1>

<p align="center">
  <sub>Официальный сайт команды MidnightProject</sub>
</p>

<p align="center">
  <a href="https://midnight-project.space"><img src="https://img.shields.io/badge/🌐_Website-midnight--project.space-7B5FFF?style=for-the-badge" alt="Website" /></a>
  <a href="https://discord.gg/heaqDH2uSD"><img src="https://img.shields.io/badge/Discord-MidnightProject-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord" /></a>
  <a href="https://t.me/portcreator_ch"><img src="https://img.shields.io/badge/Telegram-Channel-26A5E4?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegram" /></a>
</p>

---

## Стек технологий

<table>
  <tr>
    <td><b>Фреймворк</b></td>
    <td><a href="https://nextjs.org/">Next.js 16</a></td>
  </tr>
  <tr>
    <td><b>UI</b></td>
    <td><a href="https://react.dev/">React 19</a></td>
  </tr>
  <tr>
    <td><b>Язык</b></td>
    <td><a href="https://www.typescriptlang.org/">TypeScript</a></td>
  </tr>
  <tr>
    <td><b>Иконки</b></td>
    <td><a href="https://lucide.dev/">Lucide React</a></td>
  </tr>
  <tr>
    <td><b>i18n</b></td>
    <td>React Context (RU / EN)</td>
  </tr>
</table>

## 📁 Структура проекта

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
│   └── Footer/             # Футер
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

## ⚡ Быстрый старт

```bash
# Клонировать репозиторий
git clone https://github.com/project-midnight/midnight-project-site.git
cd midnight-project-site

# Установить зависимости
npm install

# Запустить dev-сервер
npm run dev
```

> Откройте **[http://localhost:3000](http://localhost:3000)** в браузере.

## 🔧 Команды

<small>Больше полезных команд — в <a href="package.json">package.json</a></small>

| Команда | Описание |
|:---|:---|
| `npm run dev` |  Запуск dev-сервера |
| `npm run build` |  Сборка продакшен-версии |
| `npm run start` |  Запуск продакшен-сервера |

## 🌐 Локализация

Сайт поддерживает **русский** 🇷🇺 и **английский** 🇺🇸 языки.

Язык определяется автоматически по заголовку `Accept-Language` и сохраняется в cookie `mp-lang`. Переключатель языка доступен в навигации.

## 📬 Обратная связь

<table>
  <tr>
    <td>📧 Email</td>
    <td><a href="mailto:portcreator@midnight-project.space">portcreator@midnight-project.space</a></td>
  </tr>
  <tr>
    <td>💬 TG Канал</td>
    <td><a href="https://t.me/portcreator_1">@portcreator_ch</a></td>
  </tr>
  <tr>
    <td>💬 Discord</td>
    <td><a href="https://discord.gg/heaqDH2uSD">MidnightProject</a></td>
  </tr>
</table>

Комиты и PR-ы приветствуются!

---

<p align="center">
  <sub>Made with 💜 by <a href="https://midnight-project.space">MidnightProject</a> a <a href="https://github.com/PortCreator-">PortCreator</a></sub>
</p>
<p align="center">
  <sub><small>README.md частично написан с помощью искусственного интеллекта.</small></sub>
</p>