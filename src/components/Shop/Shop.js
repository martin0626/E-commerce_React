import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import Filter from "./Filter";
import Products from "./Products";
import classes from "./Shop.module.css";
import LoadingElement from "../Ui/Loading";
import { Fragment, useState } from "react";
import ReactPaginate from "react-paginate";

const PRODUCTS_PER_PAGE = 4;

const Shop = () => {
  // Filters, Sizes and Gender Filtering
  let { gender } = useParams();
  let [queryParams] = useSearchParams();
  let filter = queryParams.get("filter");
  let size = queryParams.get("size");

  // On Loading Effect
  const isLoading = useSelector((state) => state.ui.isLoading);

  // Fetch All Products
  let products = useSelector((state) => state.products.products);

  // Pagination
  const [productsOffset, setProductsOffset] = useState(0);
  const endOffset = productsOffset + PRODUCTS_PER_PAGE;
  const currProducts = products.slice(productsOffset, endOffset);
  const pageCount = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * PRODUCTS_PER_PAGE) % products.length;
    setProductsOffset(newOffset);
  };

  // TODO Style Paginator https://www.npmjs.com/package/react-paginate
  return (
    <Fragment>
      <section className={classes["shop-section"]}>
        <Filter />

        {isLoading ? (
          <LoadingElement />
        ) : (
          <Products
            gender={gender}
            filter={filter}
            size={size}
            products={currProducts}
          />
        )}
      </section>
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName={classes.paginator}
        pageLinkClassName={classes["paginator-a"]}
      />
    </Fragment>
  );
};

export default Shop;
