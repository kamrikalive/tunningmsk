
import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Страница не найдена</h1>
      <p>Извините, мы не можем найти страницу, которую вы ищете.</p>
      <Link href="/">
        Вернуться на главную
      </Link>
    </div>
  );
}
