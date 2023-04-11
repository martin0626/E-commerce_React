const helpers = {
  calculateSalePrice: (price, sale) => {
    return price * ((100 - sale) / 100);
  },
};

export default helpers;
