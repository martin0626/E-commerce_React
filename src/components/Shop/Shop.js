import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import Filter from "./Filter";
import Products from "./Products";
import classes from "./Shop.module.css";
import LoadingElement from "../Ui/Loading";
import { Fragment, useState } from "react";
import ReactPaginate from "react-paginate";
import useFilter from "../../hooks/use-filter";

const PRODUCTS_PER_PAGE = 20;

const Shop = () => {
  // Categories, Sizes and Gender Filtering
  let { gender } = useParams();
  let [queryParams] = useSearchParams();
  const sizeFilters = queryParams.getAll("size");
  const categoryFilters = queryParams.getAll("category");

  // On Loading Effect
  const isLoading = useSelector((state) => state.ui.isLoading);

  // Fetch All Products
  const searchFilter = queryParams.getAll("search")[0] || "";

  // let products = useSelector((state) => state.products.products);
  let products = useFilter({ gender, categoryFilters, sizeFilters });
  if (searchFilter.trim() !== "") {
    products = products.filter((product) => {
      const regex = new RegExp(`${searchFilter}`, "gi");
      return product.title.match(regex);
    });
  }

  // Pagination From: https://www.npmjs.com/package/react-paginate
  const [productsOffset, setProductsOffset] = useState(0);
  const endOffset = productsOffset + PRODUCTS_PER_PAGE;
  const currProducts = products.slice(productsOffset, endOffset);
  const pageCount = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * PRODUCTS_PER_PAGE) % products.length;
    setProductsOffset(newOffset);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // TODO Style Paginator
  return (
    <Fragment>
      <section className={`${classes["shop-section"]} scroll-container`}>
        <Filter />

        {isLoading ? (
          <LoadingElement />
        ) : (
          <Products
            gender={gender}
            categories={categoryFilters}
            sizes={sizeFilters}
            products={currProducts}
          />
        )}
      </section>
      {pageCount > 1 && (
        <ReactPaginate
          breakAriaLabels={"..."}
          nextLabel="Next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< Back"
          renderOnZeroPageCount={null}
          containerClassName={classes.paginator}
          pageLinkClassName={classes["paginator-a"]}
          previousClassName={classes.previous}
          nextClassName={classes.next}
          activeLinkClassName={classes.active}
          disabledClassName={classes["disabled-nb"]}
        />
      )}
    </Fragment>
  );
};

export default Shop;
