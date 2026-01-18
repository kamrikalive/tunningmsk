import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

// Ссылки на ресурсы
const BACKGROUND_IMAGE_URL = 'https://storage.yandexcloud.net/relaxdev/tunning/bg.png';

// 1. Настройка Viewport
export const viewport: Viewport = {
  themeColor: "#020106",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  // Обновил Title для лучшего SEO (добавил "Москва" и "Установка")
  title: "TUNING MSK | Пороги и Тюнинг с установкой в Москве",
  description: "Премиальные пороги, спойлеры и обвесы для GAC, Geely, Changan, Haval. Профессиональная установка тюнинга в Москве. Доставка по всей России.",
  
  // 2. ОГРОМНЫЙ СПИСОК КЛЮЧЕВЫХ СЛОВ
  keywords: [
    // --- Основные услуги и гео ---
    "тюнинг авто Москва",
    "установка порогов в Москве",
    "купить пороги на авто",
    "магазин тюнинга",
    "тюнинг ателье Москва",
    "установка обвесов",
    "боковые подножки купить",
    "ступени для внедорожников",
    "автоаксессуары Москва",
    "детейлинг и тюнинг",
    "доставка тюнинга по России",
    
    // --- Конкретные товары ---
    "пороги алюминиевые",
    "спойлер на багажник",
    "лип спойлер купить",
    "защита бампера",
    "обвесы на авто",
    "пороги OEM style",
    "оригинальные пороги",
    
    // --- Бренды и Модели (Самое важное для поиска) ---
    // GAC
    "пороги GAC GS8",
    "тюнинг GAC GS8 II",
    "аксессуары GAC",
    // Geely
    "пороги Geely Monjaro",
    "пороги Geely Coolray",
    "пороги Geely Tugella",
    "пороги Geely Okavango",
    "тюнинг Джили Монджаро",
    // Changan
    "пороги Changan UNI-K",
    "тюнинг Changan UNI-V",
    "пороги Чанган",
    // Haval & Tank
    "пороги Haval F7",
    "пороги Haval Jolion",
    "пороги Tank 300",
    "пороги Tank 500",
    // Kia & Hyundai
    "пороги Kia Sportage 4",
    "пороги Kia Sorento",
    "тюнинг Киа Спортейдж",
    // BMW & Premium
    "пороги BMW X5 F15",
    "спойлер BMW X6 E71",
    "тюнинг BMW X5",
    
    // --- Китайские авто (общие) ---
    "тюнинг китайских авто",
    "пороги на Exeed",
    "пороги на Chery Tiggo",
    "аксессуары для китайских машин"
  ],

  // 3. PWA Манифест
  manifest: '/site.webmanifest',

  // 4. Иконки
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/web-app-manifest-192x192.png',
      },
    ],
  },

  // 5. Open Graph (Соцсети)
  openGraph: {
    title: 'TUNING MSK - Тюнинг, который меняет характер',
    description: 'Премиальные решения для вашего авто. Установка в Москве и доставка по РФ.',
    url: 'https://tuningmskshop.ru', 
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
  return (
    <html lang="ru">
      <body className={`${inter.variable} font-sans antialiased bg-black text-white selection:bg-blue-500/30`}>
        <Header />
        <main className="min-h-screen relative flex flex-col">
           {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}