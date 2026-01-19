// app/data/products.ts
import { Product } from '../types';

// 🔴 БАЗОВЫЙ ПУТЬ К ОБЛАКУ (БЕЗ /products, так как папки 4,5,6,7 лежат сразу в tunning)
const CLOUD_URL = 'https://storage.yandexcloud.net/relaxdev/tunning';

export const products: Product[] = [
  // --- 1. Geely Okavango (ЛОКАЛЬНЫЕ ФОТО) ---
  {
    id: 'geely-okavango',
    name: 'Пороги для Geely Okavango',
    description: 'Алюминиевые боковые ступени (подножки) премиум-класса.',
    price: 18500,
    oldPrice: 21000,
    image: '/products/1/HOWxV6GLQOLHSrRZ-qg4gaUabXvYCBWATYTNzVo2SSGtNceGK0Vz-FtP1VyBNKyLrhvdITlBiIrCyGO7OhYdhDXx.jpg',
    images: [
      '/products/1/HOWxV6GLQOLHSrRZ-qg4gaUabXvYCBWATYTNzVo2SSGtNceGK0Vz-FtP1VyBNKyLrhvdITlBiIrCyGO7OhYdhDXx.jpg',
      '/products/1/q4joOak_Yu41sYxzu6jEDyo_TWi2EqmJubQ0tNoILaKfs_gs09OImiS6vx8GKIC21yXsf90C8bpKpgFwbXzgXRHO.jpg',
      '/products/1/sQPlX0oJ3kDObEi89VynvHUWZ-WpdtnDCdFDn97zP3-45nsEUmBt8H8GaCnG_zi6MPxkWKZNU2wbFUmBApjcgsTM.jpg'
    ],
    features: ['Нагрузка до 150кг', 'Штатная установка', 'Защита от грязи', 'Ширина 10 см', 'Противоскользящие'],
    specifications: [
      { label: 'Материал', value: 'Авиационный алюминий', icon: '🔩' },
      { label: 'Ширина', value: '10 см', icon: '📏' },
      { label: 'Нагрузка', value: '150 кг', icon: '💪' },
      { label: 'Установка', value: 'В штатные места', icon: '🔧' }
    ]
  },
  
  // --- 2. Kia Sportage 4 (ЛОКАЛЬНЫЕ ФОТО) ---
  {
    id: 'kia-sportage-4',
    name: 'Пороги Kia Sportage 4',
    description: 'Стильные подножки Style Original (2016-2020). Идеальная интеграция в дизайн.',
    price: 16900,
    image: '/products/2/photo_5393137021833907684_y.jpg',
    images: [
      '/products/2/photo_5393137021833907684_y.jpg',
      '/products/2/photo_5393137021833907685_y.jpg',
      '/products/2/photo_5393137021833907686_y.jpg',
      '/products/2/photo_5393137021833907687_y.jpg'
    ],
    features: ['Копия оригинала', 'Не занижают клиренс', 'Усиленный профиль', 'Крепеж в комплекте'],
    specifications: [
      { label: 'Модель', value: 'Kia Sportage 4', icon: '🚗' },
      { label: 'Стиль', value: 'OEM Style', icon: '✨' },
      { label: 'Комплект', value: 'Полный', icon: '📦' },
      { label: 'Гарантия', value: '1 год', icon: '🛡️' }
    ]
  },

  // --- 3. GAC GS8 (ЛОКАЛЬНЫЕ ФОТО + ОБЛАЧНОЕ ВИДЕО) ---
  {
    id: 'gac-gs8',
    name: 'Пороги GAC GS8',
    description: 'Усиленные боковые ступени для GAC GS8 (2021+). Максимальная защита и комфорт.',
    price: 24500,
    oldPrice: 28000,
    image: '/products/3/photo_5393137021833907695_y.jpg',
    images: [
      '/products/3/photo_5393137021833907695_y.jpg',
      '/products/3/photo_5393137021833907696_y.jpg',
      '/products/3/photo_5393137021833907697_y.jpg',
      '/products/3/photo_5393137021833907698_y.jpg',
      '/products/3/photo_5393137021833907701_y.jpg',
      '/products/3/photo_5393137021833907702_y.jpg',
      '/products/3/photo_5393137021833907703_y.jpg',
      '/products/3/photo_5393137021833907704_y.jpg'
    ],
    // 🔴 ИСПРАВЛЕНА ССЫЛКА НА ВИДЕО (добавлено /tunning/)
    video: 'https://storage.yandexcloud.net/relaxdev/tunning/document_5393137021373940699.mp4',
    features: ['Премиальный вид', 'Вес 2-х человек', 'Антикоррозия', 'Защита порогов'],
    specifications: [
      { label: 'Модель', value: 'GAC GS8 II', icon: '🚗' },
      { label: 'Длина', value: '190 см', icon: '📏' },
      { label: 'Материал', value: 'Алюминий + ABS', icon: '💎' },
      { label: 'Нагрузка', value: 'До 200 кг', icon: '⚖️' }
    ]
  },

  // --- 4. Chevrolet Cruze Spoiler (ОБЛАКО) ---
  {
    id: 'chevrolet-cruze-spoiler',
    name: 'Спойлер Chevrolet Cruze (2008-2016)',
    description: 'Спойлер на крышку багажника. Цвет: чёрный глянец. Эластичный материал, длина 122см.',
    price: 2500,
    // Теперь ссылки ведут в папки 4, 5, 6 внутри tunning
    image: `${CLOUD_URL}/4/photo_5422847153161309741_y.jpg`,
    images: [
      `${CLOUD_URL}/4/photo_5422847153161309741_y.jpg`,
      `${CLOUD_URL}/4/photo_5422847153161309742_y.jpg`,
      `${CLOUD_URL}/4/photo_5422847153161309743_y.jpg`,
      `${CLOUD_URL}/4/photo_5422847153161309744_y.jpg`
    ],
    features: ['Чёрный глянец', 'Эластичный материал', 'Скотч 3М в комплекте', 'Длина 122 см'],
    specifications: [
      { label: 'Материал', value: 'Эластичный ABS', icon: '💎' },
      { label: 'Длина', value: '122 см', icon: '📏' },
      { label: 'Цвет', value: 'Черный глянец', icon: '🎨' },
      { label: 'Установка', value: 'Скотч 3М', icon: '🔧' }
    ]
  },

  // --- 5. BMW X5 F15 Steps (ОБЛАКО) ---
  {
    id: 'bmw-x5-f15-steps',
    name: 'Пороги BMW X5 F15 (Style Original)',
    description: 'Боковые подножки Style Original для BMW X5 F15. Копия оригинала.',
    price: 18000,
    oldPrice: 21000,
    image: `${CLOUD_URL}/5/photo_5422847153161310452_x.jpg`,
    images: [
      `${CLOUD_URL}/5/photo_5422847153161309753_y.jpg`,
      `${CLOUD_URL}/5/photo_5422847153161309755_y.jpg`,
      `${CLOUD_URL}/5/photo_5422847153161309756_y.jpg`,
      `${CLOUD_URL}/5/photo_5422847153161309757_y.jpg`,
      `${CLOUD_URL}/5/photo_5422847153161309759_x.jpg`,
    ],
    features: ['OEM Style (Копия)', 'Защита от повреждений', 'Штатная установка', 'Облегчают посадку'],
    specifications: [
      { label: 'Кузов', value: 'BMW X5 F15', icon: '🚗' },
      { label: 'Стиль', value: 'Original Style', icon: '✨' },
      { label: 'Комплект', value: '2 порога + крепеж', icon: '📦' },
      { label: 'Установка', value: 'Штатные места', icon: '🔧' }
    ]
  },

  // --- 6. BMW X6 E71 Spoiler (ОБЛАКО) ---
  {
    id: 'bmw-x6-e71-spoiler',
    name: 'Спойлер BMW X6 E71',
    description: 'Спойлер на крышку багажника для BMW X6 E71. Цвет: чёрный глянец.',
    price: 2500,
    image: `${CLOUD_URL}/6/photo_5422847153161309809_y.jpg`,
    images: [
      `${CLOUD_URL}/6/photo_5422847153161309809_y.jpg`,
      `${CLOUD_URL}/6/photo_5422847153161309810_y.jpg`,
      `${CLOUD_URL}/6/photo_5422847153161309811_y.jpg`
    ],
    features: ['Чёрный глянец', 'Эластичный материал', 'Длина 122 см', 'Скотч 3М в комплекте'],
    specifications: [
      { label: 'Кузов', value: 'BMW X6 E71', icon: '🚗' },
      { label: 'Цвет', value: 'Черный глянец', icon: '🎨' },
      { label: 'Материал', value: 'Эластичный ABS', icon: '💎' },
      { label: 'Установка', value: 'На крышку багажника', icon: '🔧' }
    ]
  },

  // --- 7. Changan UNI-K Steps (ОБЛАКО) ---
  {
    id: 'changan-uni-k-steps',
    name: 'Пороги Changan UNI-K',
    description: 'Алюминиевые боковые ступени для Changan UNI-K.',
    price: 24500,
    oldPrice: 28000,
    image: `${CLOUD_URL}/7/photo_5422847153161310448_y.jpg`,
    images: [
      `${CLOUD_URL}/7/photo_5422847153161310448_y.jpg`,
      `${CLOUD_URL}/5/photo_5422847153161310452_x.jpg`,
      `${CLOUD_URL}/5/photo_5422847153161310447_y.jpg`,
      `${CLOUD_URL}/7/photo_5422847153161309758_y.jpg`,
      `${CLOUD_URL}/7/photo_5422847153161310450_y.jpg`,
      `${CLOUD_URL}/7/photo_5422847153161310451_y.jpg`,
      `${CLOUD_URL}/7/photo_5422847153161310453_y.jpg`,
      `${CLOUD_URL}/7/photo_5422847153161310454_y.jpg`,
      `${CLOUD_URL}/7/photo_5422847153161310455_y.jpg`
    ],
    features: ['Нагрузка 150 кг', 'Алюминиевый профиль', 'Защита от повреждений', 'Штатная установка'],
    specifications: [
      { label: 'Модель', value: 'Changan UNI-K', icon: '🚗' },
      { label: 'Материал', value: 'Алюминий', icon: '💎' },
      { label: 'Нагрузка', value: '150 кг', icon: '💪' },
      { label: 'Комплект', value: 'Пороги + крепеж', icon: '📦' }
    ]
  }
];