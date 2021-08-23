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

export const saveProducts = async (products: Product[]): Promise<void> => {
  for (const product of products) {
    // don't update the product if a field is empty, e.g. "Iceberg Lettuce" should not be allowed to become ""
    const parsedProduct = deleteEmptyKeys(product);

    console.log(
      `Saving product with id: ${product.id}, displayName: ${product.displayName}, price: ${product.price}, quantityValue: ${product.quantityValue} and quantityUnit: ${product.quantityUnit}...`,
    );

    await db
      .shopProducts(ShopIds.Woolworths)
      .doc(parsedProduct.id)
      .set(parsedProduct, { merge: true });
  }
};
