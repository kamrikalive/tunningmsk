import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import { products } from './data/products';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Фоновое изображение с overlay */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      {/* Fallback градиент */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
      <div className="fixed inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      
      <div className="relative z-10">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 py-8 md:py-12">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Автозапчасти и тюнинг
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
              Качественные пороги и аксессуары для вашего автомобиля
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <footer className="mt-16 md:mt-20 text-center text-gray-400 py-8">
            <p className="mb-4">TUNING MSK SHOP</p>
            <p className="text-sm">
              Работаем с 9:00 до 18:30 ежедневно
            </p>
            <a 
              href="https://t.me/+79175476887" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors mt-2 inline-block"
            >
              Связаться в Telegram
            </a>
          </footer>
        </main>
      </div>
    </div>
  );
}
