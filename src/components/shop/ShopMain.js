import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";

import { Button, Grid } from "@mui/material";
import ProductLayoutTwo from "../layout/productLayoutTwo/ProductLayoutTwo";
import { useParams } from "react-router";

import { useDispatch, useSelector } from "react-redux";
import { getFilteredProducts } from "../../store/filterSlice";

const Pagination = ({
  productsPerPage,
  totalProducts,
  currentPage,
  paginate,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      {pageNumbers && pageNumbers.length > 1 && (
        <>
          <Box className="pagination">
            {pageNumbers.map((number, i) => (
              <Button
                key={i}
                onClick={() => paginate(number)}
                className={number === currentPage ? "currentPage" : ""}
              >
                {number}
              </Button>
            ))}
          </Box>
        </>
      )}
    </>
  );
};

const ShopMain = () => {
  const { category } = useParams();
  const dispatch = useDispatch();

  const { products, price } = useSelector((state) => state.productsReducer);
  const { filteredProducts, productsPerPage, filteredBrands, sorting } =
    useSelector((state) => state.filterReducer);

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const handlePaginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    dispatch(getFilteredProducts());
  }, [products, dispatch]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredProducts, productsPerPage]);

  useEffect(() => {
    dispatch(getFilteredProducts());
  }, [category, sorting, price, filteredBrands, dispatch]);

  return (
    <>
      <Box className="shop">
        <Grid container spacing="20">
          {filteredProducts
            .slice(indexOfFirstProduct, indexOfLastProduct)
            .map((product) => (
              <Grid item md={3} key={product.id}>
                <ProductLayoutTwo {...product} />
              </Grid>
            ))}
        </Grid>

        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={filteredProducts.length}
          paginate={handlePaginate}
          currentPage={currentPage}
        />
      </Box>
    </>
  );
};

export default ShopMain;
