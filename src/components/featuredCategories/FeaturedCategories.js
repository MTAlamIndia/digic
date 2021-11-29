import { Container, Grid } from "@mui/material";
import React from "react";
import { navCategory } from "../../store/navigations";
import ProductLayoutOne from "../layout/productLayoutOne/ProductLayoutOne";

const FeaturedCategories = () => {
  return (
    <>
      <section>
        <Container>
          <Grid container spacing={3}>
            <Grid item md={4}>
              <ProductLayoutOne
                image="./images/tablet-smartphone.webp"
                link={`${navCategory}mobile & tablet`}
                subtitle="up to 30% off"
                title="tablet & smartphone"
              />
            </Grid>

            <Grid item md={4}>
              <ProductLayoutOne
                image="./images/camera-video.webp"
                link={`${navCategory}audio & video`}
                subtitle="up to 30% off"
                title="camera & video"
              />
            </Grid>

            <Grid item md={4}>
              <ProductLayoutOne
                image="./images/tv-home-theatre.webp"
                link={`${navCategory}game & video`}
                subtitle="up to 30% off"
                title="Television & Home Theatre"
              />
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default FeaturedCategories;
