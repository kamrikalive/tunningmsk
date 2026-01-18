import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script"; // Импорт для Метрики
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

// Ссылки на ресурсы
const BACKGROUND_IMAGE_URL = 'https://storage.yandexcloud.net/relaxdev/tunning/bg.png';
const SITE_URL = 'https://tuningmskshop.ru';

// 1. Настройка Viewport
export const viewport: Viewport = {
  themeColor: "#020106",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  // Обновил Title для лучшего SEO
  title: "TUNING MSK | Пороги и Тюнинг с установкой в Москве",
  description: "Премиальные пороги, спойлеры и обвесы для GAC, Geely, Changan, Haval. Профессиональная установка тюнинга в Москве. Доставка по всей России.",
  
  // Ключевые слова
  keywords: [
    // --- Основные услуги и гео ---
    "тюнинг авто Москва", "установка порогов в Москве", "купить пороги на авто",
    "магазин тюнинга", "тюнинг ателье Москва", "установка обвесов",
    "боковые подножки купить", "ступени для внедорожников", "автоаксессуары Москва",
    "детейлинг и тюнинг", "доставка тюнинга по России",
    
    // --- Конкретные товары ---
    "пороги алюминиевые", "спойлер на багажник", "лип спойлер купить",
    "защита бампера", "обвесы на авто", "пороги OEM style", "оригинальные пороги",
    
    // --- Бренды и Модели ---
    "пороги GAC GS8", "тюнинг GAC GS8 II", "аксессуары GAC",
    "пороги Geely Monjaro", "пороги Geely Coolray", "пороги Geely Tugella",
    "пороги Geely Okavango", "тюнинг Джили Монджаро",
    "пороги Changan UNI-K", "тюнинг Changan UNI-V", "пороги Чанган",
    "пороги Haval F7", "пороги Haval Jolion", "пороги Tank 300", "пороги Tank 500",
    "пороги Kia Sportage 4", "пороги Kia Sorento", "тюнинг Киа Спортейдж",
    "пороги BMW X5 F15", "спойлер BMW X6 E71", "тюнинг BMW X5",
    
    // --- Китайские авто ---
    "тюнинг китайских авто", "пороги на Exeed", "пороги на Chery Tiggo",
    "аксессуары для китайских машин"
  ],

  // Базовый URL для SEO
  metadataBase: new URL(SITE_URL),
  
  // Canonical (Важно!)
  alternates: {
    canonical: '/',
  },

  // Роботы (Важно!)
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

  // 3. PWA Манифест
  manifest: '/site.webmanifest',

  // 4. Иконки (Добавил SVG как приоритет для Яндекса)
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' }, // Рекомендуется добавить этот файл
      { url: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }, // Лучше иметь отдельную иконку для Apple
    ],
  },

  // 5. Open Graph (Соцсети)
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
  
  // Верификация (если нужно)
  verification: {
    // yandex: 'ваш_код_из_вебмастера',
    // google: 'ваш_код_из_консоли',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Микроразметка Организации (для красивого сниппета)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoPartsStore", // Или "AutoBodyShop"
    "name": "TUNING MSK",
    "image": BACKGROUND_IMAGE_URL,
    "url": SITE_URL,
    "telephone": "+7XXXXXXXXXX", // Укажите реальный телефон
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Москва",
      "addressCountry": "RU"
    },
    "description": "Профессиональный тюнинг и установка порогов в Москве."
  };

  return (
    <html lang="ru">
      <body className={`${inter.variable} font-sans antialiased bg-black text-white selection:bg-blue-500/30`}>
        {/* Yandex.Metrika counter */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=XXXXXXXX', 'ym');

            ym(106320593, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
          `}
        </Script>
        <noscript>
          <div>
            {/* Замените XXXXXXXX на ваш ID метрики */}
            <img src="https://mc.yandex.ru/watch/XXXXXXXX" style={{ position: 'absolute', left: '-9999px' }} alt="" />
          </div>
        </noscript>
        {/* /Yandex.Metrika counter */}

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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