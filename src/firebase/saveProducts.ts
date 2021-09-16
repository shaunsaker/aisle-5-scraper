import { deleteEmptyKeys } from '../utils/deleteEmptyKeys';
import { db } from './db';
import { Product } from './models';

export const saveProducts = async (products: Product[]): Promise<void> => {
  // TODO: get and increment the products version

  for (const product of products) {
    // don't update the product if a field is empty, e.g. "Iceberg Lettuce" should not be allowed to become ""
    const parsedProduct = deleteEmptyKeys(product);

    console.log(`Saving product...\n${JSON.stringify(product, null, 2)}\n`);

    await db.products.doc(parsedProduct.id).set(parsedProduct, { merge: true });
  }
};
