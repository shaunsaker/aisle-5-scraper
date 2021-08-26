export type CategoryId = string;

export interface Category {
  id: CategoryId;
  displayName: string;
}

export interface ShopCategory extends Category {
  pageUrl: string;
}

export type ShopProductId = string;

export interface ShopProduct {
  id: ShopProductId;
  displayName: string;
  price: number;
  quantityValue: number;
  quantityUnit: string;
  categoryId: CategoryId;
}

export enum ShopIds {
  Woolworths = 'woolworths',
}

export interface Product {
  id: string;
  displayName: string;
  categoryId: string;
  woolworthsProductIds: ShopProductId[];
}
