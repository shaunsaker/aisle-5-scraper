import { db } from '../../firebase/db';
import { Category, ShopIds } from '../../firebase/models';

// manually get the food categories and save them to firestore
const categories: Category[] = require('./categories.json');

const saveCategories = async (categories: Category[]) => {
  for (const category of categories) {
    await db
      .shopCategories(ShopIds.Woolworths)
      .doc(category.displayName)
      .set(category);
  }
};

saveCategories(categories);
