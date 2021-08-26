import { deleteEmptyKeys } from '../utils/deleteEmptyKeys';
import { db } from './db';
import { ShopProduct, ShopIds } from './models';

export const saveShopProducts = async (
  products: ShopProduct[],
): Promise<void> => {
  for (const product of products) {
    // don't update the product if a field is empty, e.g. "Iceberg Lettuce" should not be allowed to become ""
    const parsedProduct = deleteEmptyKeys(product);

    console.log(`Saving product...\n${JSON.stringify(product, null, 2)}\n`);

    await db
      .shopProducts(ShopIds.Woolworths)
      .doc(parsedProduct.id)
      .set(parsedProduct, { merge: true });
  }
};
