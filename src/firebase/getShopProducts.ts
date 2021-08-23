import { db } from './db';
import { Product, ShopIds } from './models';

export const getShopProducts = async (shopId: ShopIds): Promise<Product[]> =>
  (await (await db.shopProducts(shopId)).get()).docs.map((document) =>
    document.data(),
  );
