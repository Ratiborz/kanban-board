export const storageCards = {
  setItem: (data: any) => {
    localStorage.setItem('cards', JSON.stringify(data));
  },
  getItem: (name: string) => {
    const item = localStorage.getItem(name);

    if (item) {
      return JSON.parse(item);
    }
  },
};
