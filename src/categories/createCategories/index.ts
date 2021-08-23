import { Category, ShopCategory } from '../../firebase/models';
import { saveCategories } from '../../firebase/saveCategories';

const createCategories = async () => {
  // just use the woolworths categories
  const shopCategories: ShopCategory[] = require('../../woolworths/getCategories/categories.json');
  const categories: Category[] = shopCategories.map((shopCategory) => {
    return {
      id: shopCategory.id,
      displayName: shopCategory.displayName,
    };
  });

  await saveCategories(categories);
};

createCategories();
