import { getShopProducts } from '../../firebase/getShopProducts';
import { ShopIds } from '../../firebase/models';

const createProducts = async () => {
  // get the shop products
  const woolworthsProducts = (await getShopProducts(ShopIds.Woolworths)).length;

  console.log({ woolworthsProducts });

  // for each shop product, create a normalized name (possibly with user input)
  // save the product with the normalized name and ids of all related shop products
};

createProducts();
