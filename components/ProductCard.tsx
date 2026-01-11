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

  return (
    <>
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
        {/* Галерея изображений */}
        <div className="relative h-64 md:h-80 w-full bg-gray-200 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            unoptimized
          />
          {/* Бейдж с количеством фото */}
          {product.images && product.images.length > 1 && (
            <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
              📷 {product.images.length} фото
            </div>
          )}
          {/* Бейдж видео */}
          {product.video && (
            <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm flex items-center gap-1">
              ▶️ Видео
            </div>
          )}
          {/* Overlay при наведении */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <button
              onClick={() => setIsDetailModalOpen(true)}
              className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white/90 hover:bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold shadow-lg"
            >
              Подробнее
            </button>
          </div>
        </div>

        <div className="p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            {product.name}
          </h2>
          <p className="text-gray-600 mb-4 text-sm md:text-base leading-relaxed">
            {product.description}
          </p>

          {/* Характеристики с иконками */}
          {product.specifications && (
            <div className="grid grid-cols-2 gap-3 mb-4">
              {product.specifications.slice(0, 4).map((spec, index) => (
                <div key={index} className="flex items-center gap-2 bg-gray-50 rounded-lg p-2">
                  <span className="text-lg">{spec.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-gray-500 truncate">{spec.label}</div>
                    <div className="text-sm font-semibold text-gray-900 truncate">{spec.value}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Ключевые особенности */}
          <div className="mb-6 space-y-2">
            {product.features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                <span className="line-clamp-2">{feature}</span>
              </div>
            ))}
            {product.features.length > 3 && (
              <button
                onClick={() => setIsDetailModalOpen(true)}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium mt-2"
              >
                +{product.features.length - 3} еще особенностей
              </button>
            )}
          </div>

          {/* Кнопка заказа */}
          <button
            onClick={() => setIsOrderModalOpen(true)}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <span>🛒</span>
            <span>Заказать</span>
          </button>
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
