import { firebase } from '.';
import { Category, Product, ShopCategory, ShopIds } from './models';

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
    dataPoint<Product>(`shops/${shopId}/products`),
  categories: dataPoint<Category>('categories'),
};

export { db };
