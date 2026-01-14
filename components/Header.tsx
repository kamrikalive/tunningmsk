export default function Header() {
  return (
    // Изменил z-50 на z-40
    <header className="w-full bg-black/90 backdrop-blur-sm text-white py-4 px-4 sticky top-0 z-40 shadow-lg transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
          TUNING MSK SHOP
        </h1>
        <a 
          href="https://t.me/+79175476887" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm md:text-base hover:text-blue-400 transition-colors flex items-center gap-2"
        >
          <span className="hidden sm:inline">Telegram:</span>
          <span>+7 (917) 547-68-87</span>
        </a>
      </div>
    </header>
  );
}