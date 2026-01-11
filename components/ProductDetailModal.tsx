'use client';

import { Product } from '@/app/types';
import Image from 'next/image';
import { useState } from 'react';

interface ProductDetailModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  onOrder: () => void;
}

export default function ProductDetailModal({ product, isOpen, onClose, onOrder }: ProductDetailModalProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  if (!isOpen) return null;

  const allImages = product.images || [product.image];
  const currentImage = allImages[selectedImageIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[95vh] overflow-y-auto my-4">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{product.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-3xl leading-none w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Закрыть"
          >
            ×
          </button>
        </div>

        <div className="p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Левая колонка - Галерея */}
            <div className="space-y-4">
              {/* Главное изображение/видео */}
              <div className="relative aspect-video w-full bg-gray-100 rounded-xl overflow-hidden">
                {product.video && selectedImageIndex === allImages.length ? (
                  <div className="relative w-full h-full bg-black">
                    <video
                      src={product.video}
                      controls
                      className="w-full h-full"
                      autoPlay={isVideoPlaying}
                      onPlay={() => setIsVideoPlaying(true)}
                      playsInline
                    >
                      Ваш браузер не поддерживает видео.
                    </video>
                  </div>
                ) : (
                  <Image
                    src={currentImage}
                    alt={`${product.name} - фото ${selectedImageIndex + 1}`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                )}
              </div>

              {/* Миниатюры */}
              <div className="grid grid-cols-4 md:grid-cols-5 gap-2">
                {allImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImageIndex === index
                        ? 'border-blue-600 ring-2 ring-blue-200'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Миниатюра ${index + 1}`}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </button>
                ))}
                {product.video && (
                  <button
                    onClick={() => setSelectedImageIndex(allImages.length)}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImageIndex === allImages.length
                        ? 'border-red-600 ring-2 ring-red-200'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                      <div className="text-white text-2xl">▶️</div>
                    </div>
                    <div className="absolute bottom-1 right-1 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded">
                      Видео
                    </div>
                  </button>
                )}
              </div>
            </div>

            {/* Правая колонка - Описание */}
            <div className="space-y-6">
              {/* Описание */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Описание</h3>
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </div>

              {/* Характеристики */}
              {product.specifications && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Характеристики</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.specifications.map((spec, index) => (
                      <div key={index} className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                        <span className="text-2xl">{spec.icon}</span>
                        <div>
                          <div className="text-xs text-gray-500">{spec.label}</div>
                          <div className="text-sm font-semibold text-gray-900">{spec.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Все особенности */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Особенности</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <span className="text-green-500 mt-1 flex-shrink-0 text-lg">✓</span>
                      <span className="text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Кнопки действий */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                <button
                  onClick={onOrder}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <span>🛒</span>
                  <span>Заказать</span>
                </button>
                <a
                  href="https://t.me/+79175476887"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2"
                >
                  <span>💬</span>
                  <span>Написать в Telegram</span>
                </a>
              </div>

              {/* Информация о доставке */}
              <div className="bg-blue-50 rounded-lg p-4 space-y-2 text-sm">
                <div className="flex items-center gap-2 text-blue-900 font-semibold">
                  <span>📦</span>
                  <span>Доставка и оплата</span>
                </div>
                <div className="text-blue-800 space-y-1">
                  <p>🚕 По Москве: доставка через Яндекс GO (в день заказа)</p>
                  <p>📦 По России: транспортная компания СДЕК</p>
                  <p>🛠 Установка в сервисе (цену уточняйте)</p>
                  <p>🕐 График работы: 9:00 - 18:30 ежедневно</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
