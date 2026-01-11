'use client';

import { Product, OrderFormData } from '@/app/types';
import { useState, FormEvent } from 'react';

interface OrderModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderModal({ product, isOpen, onClose }: OrderModalProps) {
  const [formData, setFormData] = useState<OrderFormData>({
    name: '',
    phone: '',
    social: '',
    productId: product.id,
    productName: product.name
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Формируем сообщение для Telegram
      const message = `🎯 Новый заказ!\n\n` +
        `Товар: ${product.name}\n` +
        `Имя: ${formData.name}\n` +
        `Телефон: ${formData.phone}\n` +
        `Соцсеть: ${formData.social || 'Не указана'}\n\n` +
        `Время: ${new Date().toLocaleString('ru-RU')}`;

      // Отправляем в Telegram через Bot API
      // ВАЖНО: Для работы нужно создать Telegram бота через @BotFather
      // и добавить токен в .env.local файл как NEXT_PUBLIC_TELEGRAM_BOT_TOKEN
      const telegramBotToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN || '';
      const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID || '79175476887';
      
      if (telegramBotToken) {
        try {
          await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              chat_id: chatId,
              text: message,
              parse_mode: 'HTML'
            })
          });
        } catch (error) {
          console.error('Telegram API error:', error);
          // Продолжаем выполнение даже если Telegram API недоступен
        }
      } else {
        // Если нет токена, просто выводим в консоль (для разработки)
        console.log('Order data:', message);
        // В продакшене можно также отправить на email или другой сервис
      }

      setSubmitStatus('success');
      setTimeout(() => {
        onClose();
        setFormData({ name: '', phone: '', social: '', productId: product.id, productName: product.name });
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      console.error('Error submitting order:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Оформление заказа</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
            aria-label="Закрыть"
          >
            ×
          </button>
        </div>
        
        <div className="p-6">
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Товар:</p>
            <p className="font-semibold text-gray-900">{product.name}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Имя *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="Введите ваше имя"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Телефон *
              </label>
              <input
                type="tel"
                id="phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="+7 (999) 123-45-67"
              />
            </div>

            <div>
              <label htmlFor="social" className="block text-sm font-medium text-gray-700 mb-2">
                Соцсеть (Telegram, WhatsApp, VK)
              </label>
              <input
                type="text"
                id="social"
                value={formData.social}
                onChange={(e) => setFormData({ ...formData, social: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="@username или ссылка"
              />
            </div>

            {submitStatus === 'success' && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
                ✓ Заказ успешно отправлен! Мы свяжемся с вами в ближайшее время.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
                ✗ Произошла ошибка. Пожалуйста, попробуйте позже или свяжитесь с нами напрямую.
              </div>
            )}

            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Отмена
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all font-semibold disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
              >
                {isSubmitting ? 'Отправка...' : 'Отправить заказ'}
              </button>
            </div>
          </form>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg text-sm text-blue-800">
            <p className="font-semibold mb-1">📱 Связь с нами:</p>
            <a 
              href="https://t.me/+79175476887" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Telegram: +7 (917) 547-68-87
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
