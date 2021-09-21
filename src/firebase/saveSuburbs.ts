import { db } from './db';
import { Suburb } from './models';

export const saveSuburbs = async (suburbs: Suburb[]): Promise<void> => {
  for (const suburb of suburbs) {
    console.log(`Saving suburb, ${suburb.displayName}...`);

    await db.suburbs.doc(suburb.id).set(suburb);
  }
};
