import { useSelector } from "react-redux";

const sizeFiltering = (sizes, fiterSizes) => {
  let isAvailable = false;
  sizes.forEach((size) => {
    if (fiterSizes.includes(size.size)) {
      isAvailable = true;
    }
  });

  return isAvailable;
};

const useFilter = (filters) => {
  let products = useSelector((state) => state.products.products);
  const { gender, categoryFilters, sizeFilters } = filters;

  if (categoryFilters.length > 0) {
    products = products.filter((product) =>
      categoryFilters.includes(product.category.title)
    );
  }

  if (sizeFilters.length > 0) {
    products = products.filter((product) =>
      sizeFiltering(product.size, sizeFilters)
    );
  }

  if (gender) {
    products = products.filter(
      (pr) => pr.gender.toLowerCase() === gender.toLowerCase()
    );
  }

  return products;
};

export default useFilter;
