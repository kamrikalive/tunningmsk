// app/actions.ts
'use server';

import { OrderFormData } from './types';

export async function submitOrder(formData: OrderFormData) {
  const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!telegramBotToken || !chatId) {
    console.error("Telegram token or chat ID is not configured.");
    return { success: false, message: "Ошибка конфигурации сервера." };
  }

  // Используем HTML разметку, она надежнее для ввода пользователей
  const message = `
🎯 <b>Новый заказ!</b>

<b>Товар:</b> ${formData.productName}
<b>Имя:</b> ${formData.name}
<b>Телефон:</b> <code>${formData.phone}</code>
<b>Соцсеть:</b> ${formData.social || 'Не указана'}
<i>Время: ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}</i>
  `;

  try {
    const response = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML' // HTML безопаснее для пользовательского ввода
      }),
    });

    const result = await response.json();

    if (!result.ok) {
      console.error("Telegram API Error:", result);
      return { success: false, message: "Не удалось отправить заказ. Попробуйте позже." };
    }

    return { success: true, message: "Заказ успешно отправлен!" };

  } catch (error) {
    console.error("Fetch Error:", error);
    return { success: false, message: "Сетевая ошибка при отправке заказа." };
  }
}