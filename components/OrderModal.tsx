'use client';

import { Product } from '@/app/types';
import { useState, useTransition } from 'react';
import { submitOrder } from '@/app/actions';

interface OrderModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderModal({ product, isOpen, onClose }: OrderModalProps) {
  const [isPending, startTransition] = useTransition();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [social, setSocial] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    startTransition(async () => {
      const result = await submitOrder({
        name,
        phone,
        social,
        productId: product.id,
        productName: product.name,
      });

      if (result.success) {
        setSuccess(result.message);
        setTimeout(() => {
          onClose();
          setName('');
          setPhone('');
          setSocial('');
          setSuccess(null);
        }, 2000);
      } else {
        setError(result.message);
      }
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Контейнер окна (Темная тема, как у сайта) */}
      <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto relative">
        
        {/* Шапка */}
        <div className="sticky top-0 bg-gray-900/95 backdrop-blur border-b border-gray-800 px-6 py-4 flex items-center justify-between z-10">
          <h2 className="text-xl md:text-2xl font-bold text-white">Оформление заказа</h2>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-white transition-colors p-1"
            aria-label="Закрыть"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          {/* Информация о товаре */}
          <div className="mb-6 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
            <p className="text-sm text-gray-400 mb-1">Вы заказываете:</p>
            <p className="font-semibold text-blue-400 text-lg leading-tight">{product.name}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Поле Имя */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Имя *</label>
              <input 
                type="text" 
                id="name" 
                required 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                // Стили инпута: темный фон, белый текст, синяя рамка при фокусе
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" 
                placeholder="Как к вам обращаться?" 
              />
            </div>

            {/* Поле Телефон */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Телефон *</label>
              <input 
                type="tel" 
                id="phone" 
                required 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" 
                placeholder="+7 (999) 000-00-00" 
              />
            </div>

            {/* Поле Соцсеть */}
            <div>
              <label htmlFor="social" className="block text-sm font-medium text-gray-300 mb-2">Telegram / WhatsApp</label>
              <input 
                type="text" 
                id="social" 
                value={social} 
                onChange={(e) => setSocial(e.target.value)} 
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" 
                placeholder="@username (необязательно)" 
              />
            </div>

            {/* Сообщения об успехе/ошибке */}
            {success && (
              <div className="p-4 bg-green-900/30 border border-green-500/30 rounded-lg text-green-400 text-sm flex items-center gap-2">
                <span>✅</span> {success}
              </div>
            )}
            {error && (
              <div className="p-4 bg-red-900/30 border border-red-500/30 rounded-lg text-red-400 text-sm flex items-center gap-2">
                <span>❌</span> {error}
              </div>
            )}

            {/* Кнопки */}
            <div className="flex gap-3 pt-4">
              <button 
                type="button" 
                onClick={onClose} 
                className="flex-1 px-4 py-3 border border-gray-600 text-gray-300 rounded-xl hover:bg-gray-800 transition-colors font-medium"
              >
                Отмена
              </button>
              <button 
                type="submit" 
                disabled={isPending} 
                className="flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all font-bold shadow-lg shadow-blue-900/30 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
              >
                {isPending ? 'Отправка...' : 'Отправить заказ'}
              </button>
            </div>
          </form>

          {/* Футер модалки */}
          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
             <p className="text-xs text-gray-500">
               Нажимая кнопку, вы соглашаетесь с условиями обработки данных
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}