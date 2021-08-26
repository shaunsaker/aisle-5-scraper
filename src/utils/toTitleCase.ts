export const toTitleCase = (str: string): string => {
  return str.replace(/\w\S*/g, (txt: string): string => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
