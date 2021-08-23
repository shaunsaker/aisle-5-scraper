export interface Category {
  id: string;
  displayName: string;
}

export interface ShopCategory extends Category {
  pageUrl: string;
}

export interface Product {
  id: string;
  displayName: string;
  price: number;
  quantityValue: number;
  quantityUnit: string;
}

export enum ShopIds {
  Woolworths = 'woolworths',
}
