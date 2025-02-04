export const toLocale = (date: string): string => {
      return new Date(date).toLocaleDateString();
};