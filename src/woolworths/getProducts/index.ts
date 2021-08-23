import { getShopCategories } from '../../firebase/getShopCategories';
import { ShopCategory, ShopIds } from '../../firebase/models';
import { saveProducts } from '../../firebase/saveProducts';
import { woolworthsBaseUrl } from '../models';
import { parseProducts } from './parseProducts';
import { scrapeProducts } from './scrapeProducts';

const scrapeAndSaveProducts = async (
  category: ShopCategory,
  productCount: number,
) => {
  let url = `${woolworthsBaseUrl}/${category.pageUrl}?No=${productCount}`;

  if (productCount > 0) {
    url += `&Nrpp=${productCount}`;
  }

  const scrapedProducts = await scrapeProducts(url);

  const products = parseProducts(scrapedProducts, category.id);

  await saveProducts(products);

  // pageinate, rinse and repeat
  if (products.length) {
    productCount += 60;

    await scrapeAndSaveProducts(category, productCount);
  }
};

const getProducts = async () => {
  const categories: ShopCategory[] = await getShopCategories(
    ShopIds.Woolworths,
  );

  for (const category of categories) {
    const productCount = 0;

    await scrapeAndSaveProducts(category, productCount);
  }
};

getProducts();
