export interface ShopCategory {
  id: string;
  displayName: string;
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
