export const sortArrayOfObjectsByKey = <T>(
  array: T[],
  key: string,
  reverse?: boolean,
) => {
  const sortedArray = array.sort((a, b) => {
    if (a[key] > b[key]) {
      return reverse ? -1 : 1;
    }
    if (a[key] < b[key]) {
      return reverse ? 1 : -1;
    }
    return 0;
  });

  return sortedArray;
};
