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
const LOGO_URL = 'https://storage.yandexcloud.net/relaxdev/tunning/logo.jpg';
const BACKGROUND_IMAGE_URL = 'https://storage.yandexcloud.net/relaxdev/tunning/bg.png';

// 1. Настройка Viewport
export const viewport: Viewport = {
  themeColor: "#020106",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "TUNING MSK SHOP | Тюнинг и аксессуары",
  description: "Премиальные пороги и аксессуары для GAC, Geely, Kia. Установка в Москве, доставка по РФ.",
  
  // 2. SEO: Роботы и Верификация
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    // Сюда можно добавить коды верификации, если не хотите использовать файлы
    // google: 'ващ_код_из_google_search_console',
    // yandex: 'ваш_код_из_yandex_webmaster',
  },

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
    description: 'Премиальные решения для вашего авто. Переходите в каталог!',
    url: 'https://tuning-msk.ru', 
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