import { firebase } from '.';
import { Category, ShopIds } from './models';

// taken and modified from https://www.thetechplatform.com/post/using-firestore-with-typescript
const converter = <T>() => ({
  toFirestore: (data: Partial<T>) => data,
  fromFirestore: (snapshot: firebase.firestore.QueryDocumentSnapshot) =>
    snapshot.data() as T,
});

const dataPoint = <T>(collectionPath: string) =>
  firebase
    .firestore()
    .collection(collectionPath)
    .withConverter(converter<T>());

const db = {
  shopCategories: (shopId: ShopIds.Woolworths) =>
    dataPoint<Category>(`shops/${shopId}/categories`),
};

export { db };
