import { Category } from '../../firebase/models';
import { saveProducts } from '../../firebase/saveProducts';
import { woolworthsBaseUrl } from '../models';
import { parseProducts } from './parseProducts';
import { scrapeProducts } from './scrapeProducts';

const scrapeAndSaveProducts = async (pageUrl: string, productCount: number) => {
  let url = `${woolworthsBaseUrl}/${pageUrl}?No=${productCount}`;

  if (productCount > 0) {
    url += `&Nrpp=${productCount}`;
  }

  const scrapedProducts = await scrapeProducts(url);

  const products = parseProducts(scrapedProducts);

  await saveProducts(products);

  // pageinate, rinse and repeat
  if (products.length) {
    productCount += 60;

    await scrapeAndSaveProducts(pageUrl, productCount);
  }
};

const getProducts = async () => {
  const categories: Category[] =
    require('../getCategories/categories.json').slice(0, 1); //await getShopCategories(ShopIds.Woolworths);

  for (const category of categories) {
    const productCount = 0;

    await scrapeAndSaveProducts(category.pageUrl, productCount);
  }
};

getProducts();
