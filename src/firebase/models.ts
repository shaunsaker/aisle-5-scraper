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

export enum Unit {
  unit = 'unit',
  pk = 'pk',
  kg = 'kg',
  lt = 'lt',
}

export interface Product {
  id: string;
  displayName: string;
  categoryId: string;
  unit: Unit;
  woolworthsProductIds: ShopProductId[];
}

export interface DeliveryRegion {
  id: string;
  displayName: string;
}
