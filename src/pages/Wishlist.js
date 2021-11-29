import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductLayoutTwo from "../components/layout/productLayoutTwo/ProductLayoutTwo";
import BannerBreadcrumb from "../components/ui/BannerBreadcrumb";
import { navShop } from "../store/navigations";

const Wishlist = () => {
  const { wishlistItems } = useSelector((state) => state.wishlistReducer);
  return (
    <>
      <BannerBreadcrumb links={[{ name: "Wishlist" }]} pageTitle="Wishlist" />
      <Container>
        <Box sx={{ textAlign: "center", paddingTop: 5, paddingBottom: 5 }}>
          {wishlistItems?.length > 0 ? (
            <Grid container spacing="20">
              {wishlistItems?.map((item) => (
                <Grid item key={item?.id} md={3}>
                  <ProductLayoutTwo {...item} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Box>
              <Typography>Wishlist is empty</Typography>
              <Link to={navShop} className="redirect__button">
                Browse Products
              </Link>
            </Box>
          )}
        </Box>
      </Container>
    </>
  );
};

export default Wishlist;
