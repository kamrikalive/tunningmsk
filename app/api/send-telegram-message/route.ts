
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const telegramBotToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN || '';
  const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID || '79175476887';
  const message = "Это тестовое сообщение для проверки интеграции с Telegram.";

  if (!telegramBotToken) {
    return NextResponse.json({ error: 'Telegram bot token is not configured.' }, { status: 500 });
  }

  try {
    const response = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    });

    const data = await response.json();

    if (data.ok) {
      return NextResponse.json({ success: true, message: "Тестовое сообщение успешно отправлено!" });
    } else {
      return NextResponse.json({ success: false, error: data }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send message to Telegram.' }, { status: 500 });
  }
}
