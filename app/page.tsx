// app/page.tsx
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import { products } from './data/products';
import type { Metadata } from 'next';

// 🔴 1. YOUR BACKGROUND IMAGE
// Added your link here:
const BACKGROUND_IMAGE_URL = 'https://storage.yandexcloud.net/relaxdev/tunning/photo_5420423554655784649_y%20(1).jpg';

// 🔴 2. PREVIEW FOR MESSENGERS
export const metadata: Metadata = {
  title: 'TUNING MSK | Premium Running Boards and Accessories',
  description: 'Tuning for GAC, Geely, Kia. Installation in Moscow, delivery across Russia. Change the character of your car.',
  openGraph: {
    title: 'TUNING MSK - Tuning That Changes Character',
    description: 'Premium solutions for your car. Check out the catalog!',
    url: 'https://bbap50giju3f5sksqk35.containers.yandexcloud.net/',
    siteName: 'TUNING MSK',
    images: [
      {
        url: 'https://storage.yandexcloud.net/relaxdev/tunning/photo_5420423554655784649_y%20(1).jpg', // Preview will also be this cool car
        width: 1200,
        height: 630,
        alt: 'TUNING MSK Preview',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      
      {/* --- GLOBAL BACKGROUND --- */}
      <div className="fixed inset-0 z-0">
        {/* Layer 1: Background image of cars */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
          style={{ backgroundImage: `url('${BACKGROUND_IMAGE_URL}')` }}
        ></div>

        {/* Layer 2: Heavy darkening for text readability */}
        <div className="absolute inset-0 bg-black/80"></div>

        {/* Layer 3: Accent blue gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-black opacity-60"></div>
        
        {/* Layer 4: Noise for texture */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
      </div>
      {/* ----------------------- */}
      
      <div className="relative z-10">
        <Header />
        
        <main>
          {/* HERO SECTION */}
          <section className="relative pt-20 pb-32 overflow-hidden">
            {/* Decorative light spot */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-10"></div>
            
            <div className="max-w-7xl mx-auto px-4 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                We work all over Russia
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                Tuning That <br/> Changes Character
              </h1>
              
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium drop-shadow-sm">
                Premium running boards and accessories for GAC, Geely, Kia. 
                Installation in Moscow, fast delivery across the Russian Federation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#catalog" className="bg-white text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                  Choose Car
                </a>
                <a href="https://t.me/+79175476887" target="_blank" className="bg-black/30 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors">
                  Write on Telegram
                </a>
              </div>
            </div>
          </section>

          {/* ADVANTAGES */}
          <section className="py-10 border-y border-white/10 bg-black/40 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '0₽', label: 'Prepayment', sub: 'Payment upon receipt' },
                { number: '1 year', label: 'Warranty', sub: 'On all products' },
                { number: '24/7', label: 'Support', sub: 'Always in touch' },
                { number: 'CDEK', label: 'Delivery', sub: 'Fast and reliable' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-500 mb-1 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">{item.number}</div>
                  <div className="font-bold text-white">{item.label}</div>
                  <div className="text-sm text-gray-400">{item.sub}</div>
                </div>
              ))}
            </div>
          </section>

          {/* CATALOG */}
          <section id="catalog" className="max-w-7xl mx-auto px-4 py-20 relative">
             {/* Additional local darkening under the catalog so cards stand out better */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-0 pointer-events-none"></div>

            <div className="relative z-10">
                <div className="flex items-end justify-between mb-12">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-sm">Catalog of Solutions</h2>
                    <p className="text-gray-300 font-medium">Choose your vehicle</p>
                </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
                </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="border-t border-white/10 bg-black/80 backdrop-blur-xl py-12 relative z-10">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">TUNING MSK SHOP</h3>
              <p className="text-gray-500 mb-6">Making your cars better since 2020</p>
              <div className="flex justify-center gap-6 text-sm text-gray-400">
                <span>Moscow, Kozhukhovskaya metro</span>
                <span>Daily 9:00 - 18:30</span>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}