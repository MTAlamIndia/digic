import { Box } from "@mui/system";
import { Container, Grid } from "@mui/material";

import Logo from "../../ui/Logo";
import WishlistIcon from "../../wishlist/WishlistIcon";
import SearchBox from "../../search/SearchBox";
import CartIcon from "../../cart/CartIcon";
import MiniCart from "../../cart/MiniCart";

import "./HeaderMiddle.scss";

const HeaderMiddle = () => {
  return (
    <>
      <Box className="header__middle">
        <Container>
          <Box className="header__middle--wrapper">
            <Grid container alignItems="center">
              <Grid item xs={6} md={2}>
                <Logo />
              </Grid>
              <Grid item xs={6} md={8}>
                <SearchBox />
              </Grid>
              <Grid item xs={6} md={2}>
                <Box className="header__middle--icons">
                  <WishlistIcon />
                  <CartIcon />
                </Box>
              </Grid>
            </Grid>
            <MiniCart />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default HeaderMiddle;
