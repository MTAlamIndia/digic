import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Grid, Typography } from "@mui/material";
import ProductImageGallery from "./ProductImageGallery";
import ProductContent from "./ProductContent";
import ProductTabs from "./ProductTabs";

import { Box } from "@mui/system";
import ContentSlider from "../ui/ContentSlider";
import { useParams } from "react-router";

import { getRelatedProducts } from "../../store/relatedProductsSlice";
import ProductLayoutTwo from "../layout/productLayoutTwo/ProductLayoutTwo";

import "./ProductDetails.scss";

const ProductDetails = (props) => {
  const { slug } = useParams();
  const dispatch = useDispatch();

  const { category, id } = props;

  const { relatedProducts } = useSelector(
    (state) => state.relatedProductsReducer
  );

  useEffect(() => {
    dispatch(getRelatedProducts({ category, id }));
  }, [slug, category, id, dispatch]);

  return (
    <>
      <section>
        <Container>
          <Grid container>
            <Grid item xs={12} md={6}>
              <ProductImageGallery {...props} />
            </Grid>
            <Grid item xs={12} md={6}>
              <ProductContent {...props} />
            </Grid>
          </Grid>
          <ProductTabs {...props} />

          {relatedProducts.length >= 5 && (
            <Box className="related__products">
              <Typography className="title">Related Products</Typography>

              <ContentSlider settings={{ slidesToShow: 5, slidesToScroll: 5 }}>
                {relatedProducts.map((item) => (
                  <ProductLayoutTwo key={item.id} {...item} />
                ))}
              </ContentSlider>
            </Box>
          )}
        </Container>
      </section>
    </>
  );
};

export default ProductDetails;
