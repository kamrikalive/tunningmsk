'use client';

import { Product } from '@/app/types';
import Image from 'next/image';
import { useEffect, useState, useRef, TouchEvent } from 'react';
import { createPortal } from 'react-dom';
import { TransformWrapper, TransformComponent, ReactZoomPanPinchRef } from "react-zoom-pan-pinch";

interface ProductDetailModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  onOrder: () => void;
}

export default function ProductDetailModal({ product, isOpen, onClose, onOrder }: ProductDetailModalProps) {
  const [activeMedia, setActiveMedia] = useState<string | undefined>(undefined);
  const [isVideo, setIsVideo] = useState(false); 
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const transformComponentRef = useRef<ReactZoomPanPinchRef | null>(null);

  // --- ЛОГИКА СВАЙПА (НОВОЕ) ---
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  // Формируем единый массив слайдов для навигации
  const allImages = [product.image, ...(product.images || [])];
  const uniqueImages = Array.from(new Set(allImages));
  const slides = product.video ? [...uniqueImages, product.video] : uniqueImages;

  // Поиск индекса текущего медиа
  const currentIndex = slides.indexOf(activeMedia || '');

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

    if (isLeftSwipe) handleNextSlide();
    if (isRightSwipe) handlePrevSlide();
  };

  // Функции навигации
  const handleNextSlide = () => {
    const nextIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    selectSlideByIndex(nextIndex);
  };

  const handlePrevSlide = () => {
    const prevIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    selectSlideByIndex(prevIndex);
  };

  const selectSlideByIndex = (index: number) => {
    const media = slides[index];
    const isVid = product.video === media;
    handleMediaSelect(media, isVid);
  };
  // -----------------------------

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (isOpen && product) {
      setActiveMedia(product.image);
      setIsVideo(false);
      setIsFullscreen(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen, product]);

  useEffect(() => {
    if (!isFullscreen && transformComponentRef.current) {
       transformComponentRef.current.resetTransform();
    }
  }, [isFullscreen]);

  if (!isOpen || !product || !mounted) return null;
  
  const handleMediaSelect = (mediaUrl: string, isVideoType: boolean) => {
    setActiveMedia(mediaUrl);
    setIsVideo(isVideoType);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }).format(price);
  };

  const modalContent = (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-5xl bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden z-10 my-auto">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/40 hover:bg-red-600 rounded-full text-white transition-colors backdrop-blur-md"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* ЛЕВАЯ ЧАСТЬ: Медиа */}
        <div className="w-full md:w-1/2 bg-black flex flex-col group relative">
          
          {/* Главный экран просмотра со свайпом */}
          <div 
            className="relative h-64 md:h-[400px] w-full flex items-center justify-center bg-black touch-pan-y"
            onClick={() => !isVideo && setIsFullscreen(true)} 
            style={{ cursor: isVideo ? 'default' : 'zoom-in' }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {activeMedia && (
              isVideo ? (
                <video 
                  key={activeMedia}
                  src={activeMedia} 
                  controls 
                  className="w-full h-full object-contain"
                  autoPlay 
                  playsInline
                  muted={false}
                />
              ) : (
                <>
                  <Image
                    src={activeMedia}
                    alt={product.name}
                    fill
                    className="object-contain"
                    unoptimized
                    draggable={false}
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </>
              )
            )}

            {/* Стрелки навигации внутри деталки (скрываем на тач, показываем на ховер) */}
            {slides.length > 1 && (
                <>
                <button 
                    onClick={(e) => { e.stopPropagation(); handlePrevSlide(); }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-3 bg-black/40 text-white rounded-full opacity-0 group-hover:opacity-100 hover:bg-blue-600 transition-all z-10"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button 
                    onClick={(e) => { e.stopPropagation(); handleNextSlide(); }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-black/40 text-white rounded-full opacity-0 group-hover:opacity-100 hover:bg-blue-600 transition-all z-10"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
                </>
            )}
          </div>

          <div className="p-3 flex gap-2 overflow-x-auto bg-gray-900 border-t border-gray-800 scrollbar-thin scrollbar-thumb-gray-700">
            {uniqueImages.map((img, idx) => (
              <button
                key={`img-${idx}`}
                onClick={(e) => { e.stopPropagation(); handleMediaSelect(img, false); }}
                className={`relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all ${
                  activeMedia === img && !isVideo ? 'border-blue-500 opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <Image src={img} alt="" fill className="object-cover" unoptimized />
              </button>
            ))}

            {product.video && (
              <button
                onClick={(e) => { e.stopPropagation(); handleMediaSelect(product.video!, true); }}
                className={`relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden border-2 transition-all flex items-center justify-center bg-gray-800 ${
                  isVideo ? 'border-blue-500 opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <div className="z-10 bg-black/50 rounded-full p-1">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <Image src={product.image} alt="Video" fill className="object-cover opacity-50" unoptimized />
              </button>
            )}
          </div>
        </div>

        {/* ПРАВАЯ ЧАСТЬ: Инфо */}
        <div className="w-full md:w-1/2 p-6 md:p-8 bg-gray-900 flex flex-col max-h-[60vh] md:max-h-[80vh] overflow-y-auto">
          <h2 className="text-2xl font-bold text-white mb-2">{product.name}</h2>
          
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-3xl font-bold text-blue-500">{formatPrice(product.price)}</span>
            {product.oldPrice && (
              <span className="text-gray-500 line-through text-lg decoration-red-500/50">
                {formatPrice(product.oldPrice)}
              </span>
            )}
          </div>

          <div className="prose prose-invert mb-6">
            <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
              {product.description}
            </p>
          </div>

          {product.specifications && (
            <div className="bg-gray-800/50 rounded-xl p-4 mb-6">
              <div className="grid grid-cols-1 gap-2">
                {product.specifications.map((spec, idx) => (
                  <div key={idx} className="flex justify-between text-sm py-1 border-b border-gray-700/50 last:border-0">
                    <span className="text-gray-400">{spec.label}</span>
                    <span className="text-white font-medium text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-auto pt-4">
            <button
              onClick={onOrder}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg shadow-blue-900/20 active:scale-95 flex items-center justify-center gap-2"
            >
              <span>🛒</span>
              <span>Оформить заказ</span>
            </button>
            <p className="text-center text-gray-500 text-xs mt-3">
              Менеджер свяжется с вами в течение 15 минут
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const fullscreenContent = isFullscreen && activeMedia && !isVideo && (
    <div className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center backdrop-blur-md animate-in fade-in duration-200">
      
      <button 
        onClick={() => setIsFullscreen(false)}
        className="absolute top-6 right-6 z-[10000] p-3 bg-white/10 hover:bg-white/30 rounded-full text-white transition-colors cursor-pointer"
      >
         <svg className="w-8 h-8 drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <TransformWrapper
        ref={transformComponentRef}
        initialScale={1}
        minScale={1}
        maxScale={5}
        centerOnInit={true}
        wheel={{ step: 0.1 }}
      >
        {() => (
          <TransformComponent 
            wrapperStyle={{ width: "100%", height: "100%" }}
            contentStyle={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <div className="relative w-full h-full p-4 md:p-8 flex items-center justify-center pointer-events-none">
              <Image
                src={activeMedia}
                alt={product.name}
                fill
                className="object-contain drop-shadow-2xl pointer-events-auto"
                unoptimized
                priority
              />
            </div>
          </TransformComponent>
        )}
      </TransformWrapper>
    </div>
  );

  return createPortal(
    <>
      {modalContent}
      {fullscreenContent}
    </>,
    document.body
  );
}