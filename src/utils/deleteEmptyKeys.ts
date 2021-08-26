export const deleteEmptyKeys = <T>(obj: T): Partial<T> => {
  const newObject: Partial<T> = obj;

  Object.keys(obj).forEach((key) => {
    if (!obj[key]) {
      delete newObject[key];
    }
  });

  return newObject;
};
