import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black relative z-10 text-white overflow-hidden">
      {/* Фоновый градиент для глубины */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 py-12 relative flex flex-col items-center text-center">
        
        {/* Заголовок и описание */}
        <div className="mb-10 max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500 tracking-wide uppercase">
              TUNING MSK SHOP
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed text-balance">
              Делаем ваши автомобили лучше с 2020 года. <br className="hidden md:block" />
              Качественные пороги и аксессуары с доставкой по всей России.
            </p>
        </div>

        {/* Блок контактов */}
        <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
          
          {/* Группа соцсетей */}
          <div className="flex items-center gap-4">
            {/* Telegram */}
            <a 
              href="https://t.me/+79175476887" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-[#2AABEE]/20 hover:border-[#2AABEE] transition-all duration-300"
              aria-label="Telegram"
            >
              <svg className="w-6 h-6 text-gray-400 group-hover:text-[#2AABEE] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </a>

            {/* WhatsApp */}
            <a 
              href="https://wa.me/79175476887" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-[#25D366]/20 hover:border-[#25D366] transition-all duration-300"
              aria-label="WhatsApp"
            >
              <svg className="w-6 h-6 text-gray-400 group-hover:text-[#25D366] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
          </div>

          {/* Большая кнопка телефона */}
          <a 
             href="tel:+79175476887"
             className="relative flex items-center justify-center gap-3 bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-all hover:scale-[1.02] active:scale-95 w-full sm:w-auto"
          >
             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
             </svg>
             +7 (917) 547-68-87
          </a>
        </div>

        {/* Нижняя инфо-панель */}
        <div className="w-full border-t border-white/5 pt-8 mt-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              Москва, м. Кожуховская
            </span>
            <span className="hidden md:block w-1 h-1 bg-gray-700 rounded-full"></span>
            <span>Ежедневно 9:00 - 18:30</span>
            <span className="hidden md:block w-1 h-1 bg-gray-700 rounded-full"></span>
            <Link href="/privacy" className="hover:text-white transition-colors underline decoration-gray-700 hover:decoration-white underline-offset-4">
              Политика конфиденциальности
            </Link>
          </div>
          <div className="mt-6 text-xs text-gray-700">
            &copy; {new Date().getFullYear()} TUNING MSK SHOP. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
}