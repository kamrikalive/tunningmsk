'use client';

import { Product } from '@/app/types';
import Image from 'next/image';
import { useState, useRef, TouchEvent } from 'react'; // Добавил TouchEvent
import OrderModal from './OrderModal';
import ProductDetailModal from './ProductDetailModal';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  
  // Состояние слайдера
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  
  // --- ЛОГИКА СВАЙПА (НОВОЕ) ---
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50; // Минимальное расстояние для считывания свайпа

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      // Свайп влево -> Следующий слайд
      changeSlide(currentSlideIndex === slides.length - 1 ? 0 : currentSlideIndex + 1);
    }
    if (isRightSwipe) {
      // Свайп вправо -> Предыдущий слайд
      changeSlide(currentSlideIndex === 0 ? slides.length - 1 : currentSlideIndex - 1);
    }
  };
  // -----------------------------

  const videoRef = useRef<HTMLVideoElement>(null);

  const images = (product.images && product.images.length > 0) 
    ? product.images 
    : [product.image];
  
  const slides = product.video ? [...images, product.video] : images;
  const isVideoSlide = (index: number) => product.video && index === slides.length - 1;

  const formatPrice = (price: number) => 
    new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }).format(price);

  const changeSlide = (newIndex: number) => {
    setCurrentSlideIndex(newIndex);
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    changeSlide(currentSlideIndex === slides.length - 1 ? 0 : currentSlideIndex + 1);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    changeSlide(currentSlideIndex === 0 ? slides.length - 1 : currentSlideIndex - 1);
  };

  const goToSlide = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    changeSlide(index);
  };

  const jumpToVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (product.video) {
      changeSlide(slides.length - 1);
    }
  };

  return (
    <>
      <div 
        className="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/10 flex flex-col h-full"
      >
        {/* --- ОБЛАСТЬ МЕДИА (СЛАЙДЕР) --- */}
        <div 
          className="relative h-64 overflow-hidden bg-black cursor-pointer touch-pan-y" // touch-pan-y позволяет скроллить страницу вертикально, но ловит горизонтальные свайпы
          onClick={() => setIsDetailOpen(true)}
          // Добавляем обработчики свайпа
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Текущий слайд */}
          <div className="relative w-full h-full">
             {isVideoSlide(currentSlideIndex) ? (
               <video
                 ref={videoRef}
                 src={slides[currentSlideIndex]}
                 className="w-full h-full object-cover"
                 controls 
                 autoPlay 
                 muted 
                 playsInline
                 onClick={(e) => e.stopPropagation()} 
               />
             ) : (
               <Image
                src={slides[currentSlideIndex]}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                draggable={false} // Важно отключить перетаскивание картинки мышкой, чтобы свайп работал корректно
              />
             )}
          </div>
          
          {!isVideoSlide(currentSlideIndex) && (
             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors pointer-events-none"></div>
          )}

          {/* ИКОНКА ВИДЕО */}
          {product.video && !isVideoSlide(currentSlideIndex) && (
            <button
              onClick={jumpToVideo}
              className="absolute top-3 right-3 z-20 flex items-center gap-1 bg-red-600/90 hover:bg-red-500 text-white text-xs font-bold px-2 py-1.5 rounded-lg shadow-lg backdrop-blur-sm transition-all hover:scale-105"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              <span>Video</span>
            </button>
          )}

          {/* СТРЕЛКИ (для ПК) */}
          {slides.length > 1 && (
            <>
              <button 
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-blue-600 z-10 hidden md:block" // Скрываем на мобильном, там свайп
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>

              <button 
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-blue-600 z-10 hidden md:block" // Скрываем на мобильном
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>

              {/* ТОЧКИ */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => goToSlide(e, idx)}
                    className={`rounded-full transition-all shadow-sm ${
                      idx === currentSlideIndex 
                        ? 'bg-blue-500 w-4 h-2' 
                        : isVideoSlide(idx) 
                          ? 'bg-red-500/70 hover:bg-red-500 w-2 h-2'
                          : 'bg-white/50 hover:bg-white w-2 h-2'
                    }`}
                  />
                ))}
              </div>
            </>
          )}

          {product.oldPrice && (
            <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg z-20">
              - {Math.round((1 - product.price / product.oldPrice) * 100)}%
            </div>
          )}
        </div>

        {/* --- ИНФОРМАЦИЯ --- */}
        <div className="p-5 flex flex-col flex-grow">
          <div className="flex-grow cursor-pointer" onClick={() => setIsDetailOpen(true)}>
            <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
              {product.name}
            </h3>
            <p className="text-gray-400 text-sm line-clamp-3 mb-4">
              {product.description}
            </p>
          </div>

          <div className="mt-auto pt-4 border-t border-gray-800 flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold text-white">
                {formatPrice(product.price)}
              </div>
              {product.oldPrice && (
                <div className="text-sm text-gray-500 line-through decoration-red-500/50">
                  {formatPrice(product.oldPrice)}
                </div>
              )}
            </div>

            <button
              onClick={() => setIsOrderOpen(true)}
              className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-blue-900/20 active:scale-95"
            >
              Купить
            </button>
          </div>
        </div>
      </div>

      <OrderModal 
        product={product} 
        isOpen={isOrderOpen} 
        onClose={() => setIsOrderOpen(false)} 
      />

      <ProductDetailModal
        product={product}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        onOrder={() => {
          setIsDetailOpen(false);
          setTimeout(() => setIsOrderOpen(true), 150);
        }}
      />
    </>
  );
}