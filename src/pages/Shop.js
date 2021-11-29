import React from "react";
import { Container, Grid } from "@mui/material";
import BannerBreadcrumb from "../components/ui/BannerBreadcrumb";
import Sidebar from "../components/layout/sidebar/Sidebar";
import ShopMain from "../components/shop/ShopMain";
import ShopTopFilter from "../components/shop/shopTopFilter/ShopTopFilter";
import { Route, useParams } from "react-router-dom";
import { navCategory, navShop } from "../store/navigations";

const Shop = () => {
  const { category } = useParams();
  return (
    <>
      <Route path={navShop}>
        <BannerBreadcrumb links={[{ name: "Shop" }]} pageTitle="Shop" />
      </Route>

      <Route path={`${navCategory}:category`}>
        <BannerBreadcrumb links={[{ name: category }]} pageTitle={category} />
      </Route>

      <section>
        <Container>
          <Grid container spacing="30">
            <Grid item md={3}>
              <Sidebar />
            </Grid>
            <Grid item md={9}>
              <ShopTopFilter />
              <Route path={navShop}>
                <ShopMain />
              </Route>
              <Route path={`${navCategory}:category`}>
                <ShopMain />
              </Route>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default Shop;
