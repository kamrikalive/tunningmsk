// app/data/products.ts
import { Product } from '../types';

export const products: Product[] = [
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
    features: [
      'Выдерживают нагрузку до 150кг',
      'Установка в штатные места без сверления',
      'Защита кузова от грязи и пескоструя',
      'Ширина порога 10 см для удобной посадки',
      'Противоскользящее покрытие'
    ],
    specifications: [
      { label: 'Материал', value: 'Авиационный алюминий', icon: '🔩' },
      { label: 'Ширина', value: '10 см', icon: '📏' },
      { label: 'Нагрузка', value: '150 кг', icon: '💪' },
      { label: 'Установка', value: 'В штатные места', icon: '🔧' }
    ]
  },
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
    features: [
      'Полная копия оригинального дизайна',
      'Не занижают клиренс автомобиля',
      'Усиленный алюминиевый профиль',
      'Весь крепеж в комплекте'
    ],
    specifications: [
      { label: 'Модель', value: 'Kia Sportage 4', icon: '🚗' },
      { label: 'Стиль', value: 'OEM Style', icon: '✨' },
      { label: 'Комплект', value: 'Полный установочный', icon: '📦' },
      { label: 'Гарантия', value: '1 год', icon: '🛡️' }
    ]
  },
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
    video: 'https://storage.yandexcloud.net/relaxdev/document_5393137021373940699.mp4',
    features: [
      'Премиальный внешний вид',
      'Выдерживают вес двух человек',
      'Антикоррозийное покрытие',
      'Защита штатных порогов от повреждений'
    ],
    specifications: [
      { label: 'Модель', value: 'GAC GS8 II', icon: '🚗' },
      { label: 'Длина', value: '190 см', icon: '📏' },
      { label: 'Материал', value: 'Алюминий + ABS', icon: '💎' },
      { label: 'Нагрузка', value: 'До 200 кг', icon: '⚖️' }
    ]
  }
];