export interface Product {
  id: string;
  name: string;
  description: string;
  image: string; // Главное изображение
  images?: string[]; // Дополнительные изображения
  video?: string; // Видео (опционально)
  features: string[];
  specifications?: {
    label: string;
    value: string;
    icon?: string;
  }[];
}

export interface OrderFormData {
  name: string;
  phone: string;
  social: string;
  productId?: string;
  productName?: string;
}
