// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // Замените на ваш реальный домен
  const baseUrl = 'https://tuningmskshop.ru';

  return {
    rules: {
      userAgent: '*', // Правила для всех роботов (Google, Yandex и др.)
      allow: '/',     // Разрешаем индексировать всё
      disallow: '/api/', // (Опционально) Запрещаем индексировать API роуты
    },
    sitemap: `${baseUrl}/sitemap.xml`, // Ссылка на карту сайта
  };
}