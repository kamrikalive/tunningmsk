'use server';

import { OrderFormData } from './types';

// Исправлено: text теперь может быть undefined
function escapeHtml(text: string | undefined): string {
  if (!text) return ''; // Если пусто, возвращаем пустую строку
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function submitOrder(formData: OrderFormData) {
  const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!telegramBotToken || !chatId) {
    console.error("Telegram token or chat ID is not configured.");
    return { success: false, message: "Ошибка конфигурации сервера (нет токена)." };
  }

  // Теперь ошибки типов не будет
  const safeName = escapeHtml(formData.name);
  const safePhone = escapeHtml(formData.phone);
  const safeProduct = escapeHtml(formData.productName);
  const safeSocial = escapeHtml(formData.social || 'Не указана');

  const message = `
🎯 <b>Новый заказ!</b>

<b>Товар:</b> ${safeProduct}
<b>Имя:</b> ${safeName}
<b>Телефон:</b> <code>${safePhone}</code>
<b>Соцсеть:</b> ${safeSocial}
<i>Время: ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}</i>
  `;

  try {
    const response = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML'
      }),
    });

    const result = await response.json();

    if (!result.ok) {
      console.error("Telegram API Error:", result);
      return { 
        success: false, 
        message: `Ошибка Telegram: ${result.description || 'Неизвестная ошибка'}` 
      };
    }

    return { success: true, message: "Заказ успешно отправлен!" };

  } catch (error) {
    console.error("Fetch Error:", error);
    return { success: false, message: "Сетевая ошибка при отправке." };
  }
}