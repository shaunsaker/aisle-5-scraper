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

type ShopRegionId = string;

export interface ShopRegion {
  id: ShopRegionId;
  displayName: string;
}

export interface ShopSuburb {
  id: string;
  regionId: ShopRegionId;
  displayName: string;
  postalCode: string;
}

type ProvinceId = string;

export interface Province {
  id: ProvinceId;
  displayName: string;
  woolworthsRegionId: ShopRegionId;
}

type SuburbId = string;

export interface Suburb {
  id: SuburbId;
  displayName: string;
  postalCode: string;
  provinceId: ProvinceId;
  woolworthsSuburbId: ShopRegionId;
}
