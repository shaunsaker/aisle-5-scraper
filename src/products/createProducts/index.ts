import * as fs from 'fs';
import * as path from 'path';

import { getShopProducts } from '../../firebase/getShopProducts';
import { ShopProduct, ShopIds, Product } from '../../firebase/models';
import { getUuid } from '../../utils/getUuid';
import { getPrompt } from '../../utils/getPrompt';
import { toTitleCase } from '../../utils/toTitleCase';

const LOCAL_PRODUCTS_FILENAME = './products.json';

const writeProducts = (products: Product[]) => {
  const tabIndent = 2;

  fs.writeFileSync(
    path.join(__dirname, LOCAL_PRODUCTS_FILENAME),
    JSON.stringify(products, null, tabIndent),
  );
};

const createOrUpdateProduct = async (
  displayName: string,
  products: Product[],
  shopProduct: ShopProduct,
) => {
  const existingProduct = products.find(
    (product) =>
      product.displayName.toLowerCase() === displayName.toLowerCase(),
  );
  let newOrUpdatedProduct: Product;

  if (existingProduct) {
    // add it's id to the productIds if it does not exist already
    const idExists = existingProduct.woolworthsProductIds.some(
      (id) => id === shopProduct.id,
    );
    if (idExists) {
      return;
    }

    newOrUpdatedProduct = {
      ...existingProduct,
      woolworthsProductIds: [
        ...existingProduct.woolworthsProductIds,
        shopProduct.id,
      ],
    };
  } else {
    // create a new product
    newOrUpdatedProduct = {
      id: getUuid(),
      displayName: displayName, // FIXME: should we clean this string up? ie. we don't want a display name of "gem squasH"
      categoryId: shopProduct.categoryId, // FIXME: this won't work for other shops
      woolworthsProductIds: [shopProduct.id],
    };
  }

  console.log({
    displayName,
    shopProduct,
    existingProduct,
    newOrUpdatedProduct,
  });

  const productIndex = products.findIndex(
    (product) => product.id === newOrUpdatedProduct.id,
  );

  if (productIndex > -1) {
    products[productIndex] = newOrUpdatedProduct;
  } else {
    products.push(newOrUpdatedProduct);
  }

  writeProducts(products);
};

const createProducts = async () => {
  // get the unique products
  let products: Product[] = require(LOCAL_PRODUCTS_FILENAME); // TODO: get them from firebase

  // save the file locally for batch processing
  writeProducts(products);

  // get the shop products
  const woolworthsProducts: ShopProduct[] = require('./woolworthsProducts.json'); // TODO: await getShopProducts(ShopIds.Woolworths);

  console.log(
    'Please enter a normalised name for the product or leave it blank if the name is normalised already...',
  );

  for (const woolworthsProduct of woolworthsProducts) {
    // load the local file to get updates
    products = require(LOCAL_PRODUCTS_FILENAME);

    // only process products that we have not processed yet
    const isProductProcessed = products.some((product) =>
      product.woolworthsProductIds.includes(woolworthsProduct.id),
    );
    if (isProductProcessed) {
      continue;
    }

    try {
      const answer = toTitleCase(
        await getPrompt(woolworthsProduct.displayName),
      ).trim();

      await createOrUpdateProduct(
        answer || woolworthsProduct.displayName,
        products,
        woolworthsProduct,
      );
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }
};

createProducts();
