import { db } from './db';
import { Province } from './models';

export const getProvinces = async (): Promise<Province[]> =>
  (await (await db.provinces).get()).docs.map((document) => document.data());
