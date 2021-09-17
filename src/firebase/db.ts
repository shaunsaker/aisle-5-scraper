import { firebase } from '.';
import {
  Category,
  ShopProduct,
  ShopCategory,
  ShopIds,
  Product,
  ShopRegion,
  ShopSuburb,
} from './models';

// taken and modified from https://www.thetechplatform.com/post/using-firestore-with-typescript
const converter = <T>() => ({
  toFirestore: (data: Partial<T>) => data,
  fromFirestore: (snapshot: firebase.firestore.QueryDocumentSnapshot) =>
    snapshot.data() as T,
});

const dataPoint = <T>(collectionPath: string) =>
  firebase.firestore().collection(collectionPath).withConverter(converter<T>());

const db = {
  shopCategories: (shopId: ShopIds) =>
    dataPoint<ShopCategory>(`shops/${shopId}/categories`),
  shopProducts: (shopId: ShopIds) =>
    dataPoint<ShopProduct>(`shops/${shopId}/products`),
  shopRegions: (shopId: ShopIds) =>
    dataPoint<ShopRegion>(`shops/${shopId}/regions`),
  shopSuburbs: (shopId: ShopIds) =>
    dataPoint<ShopSuburb>(`shops/${shopId}/suburbs`),
  categories: dataPoint<Category>('categories'),
  products: dataPoint<Product>('products'),
};

export { db };
