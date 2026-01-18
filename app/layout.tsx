import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script"; // Импорт для оптимизации скриптов
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

// Константы
const BACKGROUND_IMAGE_URL = 'https://storage.yandexcloud.net/relaxdev/tunning/bg.png';
// 🔴 ВАЖНО: Указан ваш реальный домен для правильной индексации
const SITE_URL = 'https://tuningmskshop.ru';
const METRIKA_ID = 106320593;

// 1. Настройка Viewport
export const viewport: Viewport = {
  themeColor: "#020106",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  // Базовый URL для всех относительных ссылок (решает проблемы с robots и картинками)
  metadataBase: new URL(SITE_URL),

  title: "TUNING MSK | Пороги и Тюнинг с установкой в Москве",
  description: "Премиальные пороги, спойлеры и обвесы для GAC, Geely, Changan, Haval. Профессиональная установка тюнинга в Москве. Доставка по всей России.",
  
  // 2. ОГРОМНЫЙ СПИСОК КЛЮЧЕВЫХ СЛОВ
  keywords: [
    // --- Услуги и Гео ---
    "тюнинг авто Москва", "установка порогов цена", "купить пороги с установкой",
    "магазин автотюнинга", "тюнинг ателье Москва", "детейлинг авто",
    "доставка тюнинга по России", "интернет магазин тюнинга",
    
    // --- Товары ---
    "алюминиевые пороги", "боковые подножки", "ступеньки для авто",
    "спойлер на крышку багажника", "лип спойлер", "защита бампера",
    "обвесы на автомобиль", "тюнинг комплекты",
    
    // --- GAC ---
    "пороги GAC GS8", "пороги GAC GS8 II", "тюнинг GAC GS8 2024", 
    "аксессуары GAC", "обвес GAC",
    
    // --- Geely ---
    "пороги Geely Monjaro", "тюнинг Джили Монджаро", "пороги Geely Coolray",
    "пороги Geely Tugella", "пороги Geely Okavango", "аксессуары Geely",
    
    // --- Changan ---
    "пороги Changan UNI-K", "тюнинг Changan UNI-V", "пороги Чанган Юни К",
    "аксессуары Changan",
    
    // --- Haval & Tank ---
    "пороги Haval F7", "пороги Haval Jolion", "тюнинг Haval",
    "пороги Tank 300", "пороги Tank 500", "аксессуары Tank",
    
    // --- Korea & Europe ---
    "пороги Kia Sportage 4", "пороги Kia Sorento", 
    "пороги BMW X5 F15", "спойлер BMW X6 E71", "тюнинг BMW"
  ],

  // Настройка роботов (разрешаем всё + расширенные сниппеты)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Ссылки
  alternates: {
    canonical: '/',
  },

  // 3. PWA и Иконки
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' }, // Рекомендуется добавить этот файл
      { url: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/web-app-manifest-192x192.png' }, // Используем большую иконку для Apple
    ],
  },

  // 4. Open Graph (Соцсети)
  openGraph: {
    title: 'TUNING MSK - Тюнинг, который меняет характер',
    description: 'Премиальные решения для вашего авто. Установка в Москве и доставка по РФ.',
    url: SITE_URL, 
    siteName: 'TUNING MSK',
    images: [
      {
        url: BACKGROUND_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: 'TUNING MSK Preview',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Микроразметка Организации (Глобальная для всего сайта)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "AutoPartsStore",
    "name": "TUNING MSK",
    "url": SITE_URL,
    "logo": "https://storage.yandexcloud.net/relaxdev/tunning/logo.jpg",
    "description": "Профессиональный магазин тюнинга и аксессуаров с установкой в Москве.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Москва",
      "addressCountry": "RU"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+7-917-547-68-87",
      "contactType": "sales"
    }
  };

  return (
    <html lang="ru">
      <body className={`${inter.variable} font-sans antialiased bg-black text-white selection:bg-blue-500/30`}>
        
        {/* --- YANDEX METRIKA (Оптимизированная загрузка) --- */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(${METRIKA_ID}, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true,
              ecommerce:"dataLayer"
            });
          `}
        </Script>
        {/* NoScript часть для Метрики */}
        <noscript>
          <div>
            <img src={`https://mc.yandex.ru/watch/${METRIKA_ID}`} style={{ position: 'absolute', left: '-9999px' }} alt="" />
          </div>
        </noscript>
        {/* ----------------------------------------------- */}

        {/* Глобальная Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        <Header />
        
        <main className="min-h-screen relative flex flex-col">
           {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}