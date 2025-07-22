export const trimmedTitle = (title: string, maxTitleLength: number) => {
  return title.length > maxTitleLength
    ? title.split(" ").reduce((acc, word) => {
        if ((acc + word).length <= maxTitleLength) return acc + word + " ";
        return acc;
      }, "")
    : title;
};

export const formattedPrice = (price: number) => {
  return new Intl.NumberFormat("ru-RU").format(price);
};
