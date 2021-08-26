import { db } from './db';
import { ShopProduct, ShopIds } from './models';

export const getShopProducts = async (
  shopId: ShopIds,
): Promise<ShopProduct[]> =>
  (await (await db.shopProducts(shopId)).get()).docs.map((document) =>
    document.data(),
  );
