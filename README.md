# TUNING MSK SHOP

Современный адаптивный интернет-магазин автозапчастей и тюнинга на Next.js.

## Особенности

- ✅ Адаптивный дизайн (mobile-first)
- ✅ Современный UI с градиентами и анимациями
- ✅ Модальное окно для оформления заказа
- ✅ Интеграция с Telegram для уведомлений о заказах
- ✅ TypeScript для типобезопасности
- ✅ Tailwind CSS для стилизации

## Установка и запуск

1. Установите зависимости:
```bash
npm install
```

2. Создайте файл `.env.local` и добавьте токен Telegram бота (опционально):
```env
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=your_bot_token_here
NEXT_PUBLIC_TELEGRAM_CHAT_ID=79175476887
```

3. Добавьте изображения товаров в папку `public/products/`:
   - `geely-okavango.jpg`
   - `kia-sportage-4.jpg`
   - `gac-gs8.jpg`

4. Добавьте фоновое изображение `bg.jpg` в папку `public/` (опционально)

5. Запустите dev сервер:
```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## Настройка Telegram бота

1. Найдите [@BotFather](https://t.me/BotFather) в Telegram
2. Отправьте команду `/newbot` и следуйте инструкциям
3. Скопируйте полученный токен
4. Добавьте токен в `.env.local` как `NEXT_PUBLIC_TELEGRAM_BOT_TOKEN`
5. Для получения Chat ID отправьте сообщение боту и перейдите по ссылке:
   `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`

## Структура проекта

```
├── app/
│   ├── data/
│   │   └── products.ts      # Данные о товарах
│   ├── types.ts             # TypeScript типы
│   ├── layout.tsx           # Основной layout
│   ├── page.tsx             # Главная страница
│   └── globals.css          # Глобальные стили
├── components/
│   ├── Header.tsx           # Шапка сайта
│   ├── ProductCard.tsx     # Карточка товара
│   └── OrderModal.tsx      # Модальное окно заказа
└── public/
    ├── products/            # Изображения товаров
    └── bg.jpg              # Фоновое изображение
```

## Технологии

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Next.js Image Optimization

## Лицензия

MIT
