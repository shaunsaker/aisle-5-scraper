export type CategoryId = string;

export interface Category {
  id: CategoryId;
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
  categoryId: CategoryId;
}

export enum ShopIds {
  Woolworths = 'woolworths',
}
