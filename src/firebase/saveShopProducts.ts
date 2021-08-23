import { db } from './db';
import { Product, ShopIds } from './models';

const deleteEmptyKeys = <T>(obj: T): Partial<T> => {
  const newObject: Partial<T> = obj;

  Object.keys(obj).forEach((key) => {
    if (!obj[key]) {
      delete newObject[key];
    }
  });

  return newObject;
};

export const saveShopProducts = async (products: Product[]): Promise<void> => {
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
