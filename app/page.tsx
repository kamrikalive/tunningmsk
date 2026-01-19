// app/page.tsx
import Header from '@/components/Header';
// У вас Header в layout, поэтому здесь он не нужен, убираем импорт если он был,
// но судя по прошлому коду, вы хотели чистый page.tsx.
// Оставляем только контент.

import ProductCard from '@/components/ProductCard';
import { products } from './data/products';

// Ссылку на фон берем ту же, что и в layout
const BACKGROUND_IMAGE_URL = 'https://storage.yandexcloud.net/relaxdev/tunning/bg.png';

export default function Home() {
  
  // --- ГЕНЕРАЦИЯ SCHEMA.ORG (JSON-LD) ---
  // Это "паспорт" сайта для роботов. Он расскажет о товарах и видео.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. Информация о магазине
      {
        "@type": "Organization",
        "name": "TUNING MSK",
        "url": "https://tuning-msk.ru",
        "logo": "https://storage.yandexcloud.net/relaxdev/tunning/logo.jpg",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+7-917-547-68-87",
          "contactType": "customer service",
          "areaServed": "RU",
          "availableLanguage": "Russian"
        }
      },
      // 2. Список товаров и Видео
      ...products.map((product) => {
        const schema: any = {
          "@type": "Product",
          "name": product.name,
          "image": product.image.startsWith('http') ? product.image : `https://tuning-msk.ru${product.image}`,
          "description": product.description,
          "sku": product.id,
          "offers": {
            "@type": "Offer",
            "url": `https://tuning-msk.ru/#catalog`, // Ссылка на каталог
            "priceCurrency": "RUB",
            "price": product.price,
            "availability": "https://schema.org/InStock",
            "itemCondition": "https://schema.org/NewCondition"
          }
        };

        // Если у товара есть видео, добавляем VideoObject
        if (product.video) {
          schema.subjectOf = {
            "@type": "VideoObject",
            "name": `Видео обзор: ${product.name}`,
            "description": product.description,
            "thumbnailUrl": product.image.startsWith('http') ? product.image : `https://tuning-msk.ru${product.image}`, // Превью видео = фото товара
            "uploadDate": "2024-01-01T00:00:00+03:00", // Дата загрузки (обязательно для Google)
            "contentUrl": product.video, // Ссылка на сам файл видео
            "embedUrl": product.video,
            "duration": "PT0M50S" // Примерная длительность (50 сек), можно не менять
          };
        }

        return schema;
      })
    ]
  };

  return (
    <div className="min-h-screen text-white selection:bg-blue-500/30">
      
      {/* Вставляем JSON-LD в код страницы */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* --- ГЛОБАЛЬНЫЙ ФОН СТРАНИЦЫ (Локальный, если layout не перекрывает) --- */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
          style={{ backgroundImage: `url('${BACKGROUND_IMAGE_URL}')` }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-black opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
      </div>
      
      <div className="relative z-10">
        
        <main>
          {/* HERO SECTION */}
          <section className="relative pt-20 pb-32 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-10"></div>
            
            <div className="max-w-7xl mx-auto px-4 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-200 text-sm font-medium mb-6 backdrop-blur-md shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Работаем по всей России
              </div>
              
              <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-xl text-white">
                Тюнинг, который <br/> меняет характер
              </h2>
              
              <p className="text-gray-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium drop-shadow-md text-shadow-sm">
                Премиальные пороги и аксессуары для GAC, Geely, Kia. 
                Установка в Москве, быстрая доставка по всей России.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#catalog" className="bg-white text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                  Выбрать авто
                </a>
                <a href="https://t.me/+79175476887" target="_blank" className="bg-black/40 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-colors shadow-lg">
                  Написать в Telegram
                </a>
              </div>
            </div>
          </section>

          {/* ADVANTAGES */}
          <section className="py-10 border-y border-white/10 bg-black/60 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '0₽', label: 'Предоплата', sub: 'Оплата при получении' },
                { number: '1 год', label: 'Гарантии', sub: 'На всю продукцию' },
                { number: '24/7', label: 'Поддержка', sub: 'Всегда на связи' },
                { number: 'CDEK', label: 'Доставка', sub: 'Быстро и надежно' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">{item.number}</div>
                  <div className="font-bold text-white drop-shadow-md">{item.label}</div>
                  <div className="text-sm text-gray-300">{item.sub}</div>
                </div>
              ))}
            </div>
          </section>

          {/* CATALOG */}
          <section id="catalog" className="max-w-7xl mx-auto px-4 py-20 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black z-0 pointer-events-none"></div>

            <div className="relative z-10">
                <div className="flex items-end justify-between mb-12">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">Каталог решений</h2>
                    <p className="text-gray-200 font-medium drop-shadow-md">Выберите свой автомобиль</p>
                </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
                </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}