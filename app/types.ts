// app/types.ts
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;        // Новое поле: Цена
  oldPrice?: number;    // Новое поле: Старая цена (для скидки)
  image: string;
  images?: string[];
  video?: string;
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