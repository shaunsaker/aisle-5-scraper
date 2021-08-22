import { Category } from '../../firebase/models';
import { saveProducts } from '../../firebase/saveProducts';
import { woolworthsBaseUrl } from '../models';
import { parseProducts } from './parseProducts';
import { scrapeProducts } from './scrapeProducts';

const getProducts = async () => {
  const categories: Category[] =
    require('../getCategories/categories.json').slice(0, 1); //await getShopCategories(ShopIds.Woolworths);

  for (const category of categories) {
    const url = `${woolworthsBaseUrl}/${category.pageUrl}`;
    const scrapedProducts = await scrapeProducts(url);

    const products = parseProducts(scrapedProducts);

    await saveProducts(products);

    // paginate until we can't anymore, rinse and repeat
  }
};

getProducts();
