import { ShopCategory, ShopIds } from '../../firebase/models';
import { saveShopCategories } from '../../firebase/saveShopCategories';

// manually get the food categories and save them to firestore
const categories: ShopCategory[] = require('./categories.json');

saveShopCategories(ShopIds.Woolworths, categories);
