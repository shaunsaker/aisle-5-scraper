import { db } from './db';
import { Category } from './models';

export const saveCategories = async (categories: Category[]): Promise<void> => {
  for (const category of categories) {
    console.log(`Saving category, ${category.displayName}...`);

    await db.categories.doc(category.id).set(category);
  }
};
