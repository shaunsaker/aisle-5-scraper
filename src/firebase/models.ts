export interface Category {
  id: string;
  displayName: string;
  pageUrl: string;
}

export interface Product {
  id: string;
  displayName: string;
  price: number;
  quantity: {
    value: number;
    unit: string;
  };
}

export enum ShopIds {
  Woolworths = 'woolworths',
}
