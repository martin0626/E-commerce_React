import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import Filter from "./Filter";
import Products from "./Products";
import classes from "./Shop.module.css";
import LoadingElement from "../Ui/Loading";
import { Fragment, useState } from "react";
import ReactPaginate from "react-paginate";

const PRODUCTS_PER_PAGE = 20;

const Shop = () => {
  // Filters, Sizes and Gender Filtering
  let { gender } = useParams();
  let [queryParams] = useSearchParams();
  // let filter = queryParams.get("filter");
  // let size = queryParams.get("size");
  const sizeFilters = queryParams.getAll("size");
  const categoryFilters = queryParams.getAll("category");

  console.log(sizeFilters);
  console.log(categoryFilters);

  // On Loading Effect
  const isLoading = useSelector((state) => state.ui.isLoading);

  // Fetch All Products
  let products = useSelector((state) => state.products.products);

  // Pagination From: https://www.npmjs.com/package/react-paginate
  const [productsOffset, setProductsOffset] = useState(0);
  const endOffset = productsOffset + PRODUCTS_PER_PAGE;
  const currProducts = products.slice(productsOffset, endOffset);
  const pageCount = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * PRODUCTS_PER_PAGE) % products.length;
    setProductsOffset(newOffset);
  };

  // TODO Style Paginator
  return (
    <Fragment>
      <section className={classes["shop-section"]}>
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
