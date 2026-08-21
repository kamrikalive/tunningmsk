'use client';

import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full bg-black/90 backdrop-blur-sm text-white py-3 px-4 sticky top-0 z-40 shadow-lg transition-all border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* ЛОГОТИП + НАЗВАНИЕ */}
        <div className="flex items-center gap-3 md:gap-4">
          <div className="relative h-10 w-10 md:h-12 md:w-12 flex-shrink-0 rounded-full overflow-hidden border border-blue-500/30 shadow-[0_0_15px_rgba(37,99,235,0.4)]">
            <Image 
              src="https://cdn.relaxdev.ru/tuning/1.png" 
              alt="TUNING MSK Logo" 
              fill
              className="object-cover"
            />
          </div>
          <h1 className="text-lg md:text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            TUNING MSK
          </h1>
        </div>

        {/* КОНТАКТЫ (Telegram) */}
        <a 
          href="https://t.me/+79175476887" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs md:text-base hover:text-blue-400 transition-colors flex items-center gap-2 bg-white/5 px-3 py-2 rounded-full border border-white/10 hover:bg-white/10"
        >
          <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.06-.14-.09-.21-.09-.09 0-1.51.96-4.27 2.83-.4.27-.76.41-1.08.4-.36-.01-1.06-.2-1.58-.37-1.03-.33-1.02-.34.21-.83 4.82-1.89 8.04-3.14 9.64-3.79 2.68-1.07 3.24-1.26 3.61-1.26.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .24z"/>
          </svg>
          <span className="hidden sm:inline font-medium">Telegram</span>
          <span className="sm:hidden font-medium">Связаться</span>
        </a>
      </div>
    </header>
  );
}