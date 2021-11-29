import { useSelector } from "react-redux";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import ProductLayoutTwo from "../layout/productLayoutTwo/ProductLayoutTwo";

import Title from "../ui/Title";
import ContentSlider from "../ui/ContentSlider";
import LoadingSpinner from "../ui/LoadingSpinner";

import "./HotDeals.scss";

const HotDeals = () => {
  const { onSaleProducts, loading } = useSelector(
    (state) => state.productsReducer
  );

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      {onSaleProducts?.length >= 4 && (
        <section>
          <Container>
            <Box className="hot__deals">
              <Title title="Hot Deals" />
              <ContentSlider>
                {onSaleProducts.map((product) => (
                  <ProductLayoutTwo key={product.id} {...product} />
                ))}
              </ContentSlider>
            </Box>
          </Container>
        </section>
      )}
    </>
  );
};

export default HotDeals;
