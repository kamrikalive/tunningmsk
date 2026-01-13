'use client';

import { Product } from '@/app/types';
import Image from 'next/image';
import { useState } from 'react';
import OrderModal from './OrderModal';
import ProductDetailModal from './ProductDetailModal';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  // Форматирование цены
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const discount = product.oldPrice 
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) 
    : 0;

  return (
    <>
      <div className="group relative bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden hover:border-gray-600 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/10 flex flex-col h-full">
        
        {/* Изображение */}
        <div 
          className="relative aspect-[4/3] w-full bg-gray-800 cursor-pointer overflow-hidden"
          onClick={() => setIsDetailModalOpen(true)}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            unoptimized
          />
          
          {/* Бейджи */}
          <div className="absolute top-3 left-3 flex gap-2">
            {discount > 0 && (
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                -{discount}%
              </span>
            )}
            {product.video && (
              <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                ▶ Видео
              </span>
            )}
          </div>
        </div>

        {/* Контент */}
        <div className="p-5 flex flex-col flex-grow">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-blue-400 transition-colors cursor-pointer" onClick={() => setIsDetailModalOpen(true)}>
              {product.name}
            </h3>
            <p className="text-gray-400 text-sm line-clamp-2">
              {product.description}
            </p>
          </div>

          {/* Характеристики (мини) */}
          <div className="grid grid-cols-2 gap-2 mb-6">
            {product.specifications?.slice(0, 2).map((spec, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-gray-400 bg-gray-800/50 p-2 rounded-lg">
                <span>{spec.icon}</span>
                <span className="truncate">{spec.value}</span>
              </div>
            ))}
          </div>

          <div className="mt-auto flex items-center justify-between gap-4">
            {/* Цена */}
            <div>
              {product.oldPrice && (
                <div className="text-sm text-gray-500 line-through decoration-red-500/50">
                  {formatPrice(product.oldPrice)}
                </div>
              )}
              <div className="text-2xl font-bold text-white">
                {formatPrice(product.price)}
              </div>
            </div>

            {/* Кнопка */}
            <button
              onClick={() => setIsOrderModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 px-6 rounded-xl transition-all shadow-lg shadow-blue-600/20 active:scale-95 whitespace-nowrap"
            >
              Купить
            </button>
          </div>
        </div>
      </div>

      {isOrderModalOpen && (
        <OrderModal
          product={product}
          isOpen={isOrderModalOpen}
          onClose={() => setIsOrderModalOpen(false)}
        />
      )}

      {isDetailModalOpen && (
        <ProductDetailModal
          product={product}
          isOpen={isDetailModalOpen}
          onClose={() => setIsDetailModalOpen(false)}
          onOrder={() => {
            setIsDetailModalOpen(false);
            setIsOrderModalOpen(true);
          }}
        />
      )}
    </>
  );
}