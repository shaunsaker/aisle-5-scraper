import { db } from './db';
import { Province } from './models';

export const saveProvinces = async (provinces: Province[]): Promise<void> => {
  for (const province of provinces) {
    console.log(`Saving province, ${province.displayName}...`);

    await db.provinces.doc(province.id).set(province);
  }
};
