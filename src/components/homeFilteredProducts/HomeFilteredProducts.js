import { useSelector } from "react-redux";

import { Box } from "@mui/system";

import { Container } from "@mui/material";
import FilterTab from "./FilterTab";
import ProductLayoutTwo from "../layout/productLayoutTwo/ProductLayoutTwo";

import { Link } from "react-router-dom";
import { navShop } from "../../store/navigations";

import "./HomeFilteredProducts.scss";

const HomeFilteredProducts = () => {
  const { categories } = useSelector((state) => state.productsReducer);
  const { filteredProducts } = useSelector((state) => state.filterReducer);
  const categoriesNew = ["all", ...categories];

  return (
    <>
      <section>
        <Box className="home__filtered__products">
          <Container>
            <Box className="filter__tabs">
              {categoriesNew.map((item, i) => (
                <FilterTab key={i} category={item} />
              ))}
            </Box>

            <Box className="filter_products">
              {filteredProducts?.slice(0, 15).map((item) => (
                <ProductLayoutTwo key={item.id} {...item} />
              ))}
            </Box>

            {filteredProducts.length > 15 && (
              <Link to={navShop} className="redirect__button">
                Browse All Products
              </Link>
            )}
          </Container>
        </Box>
      </section>
    </>
  );
};

export default HomeFilteredProducts;
