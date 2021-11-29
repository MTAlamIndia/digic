import { Box } from "@mui/system";
import { Container, Grid } from "@mui/material";
import { BiMap } from "react-icons/bi";
import { BsEnvelope } from "react-icons/bs";

import HeaderTopContent from "./HeaderTopContent";

import { navCart, navWishlist } from "../../../store/navigations";

import "./HeaderTop.scss";

const HeaderTop = () => {
  return (
    <>
      <Box className="header__top">
        <Container>
          <Grid container>
            <Grid item xs={12} sm={6} className="header__top--grid">
              <HeaderTopContent icon={<BiMap />} text="Find Store" link="/" />
              <HeaderTopContent
                icon={<BsEnvelope />}
                text="support@digic.com"
                link="mailto:support@digic.com"
              />
            </Grid>
            <Grid item xs={12} sm={6} className="header__top--grid">
              <HeaderTopContent text="Wishlist" link={navWishlist} />
              <HeaderTopContent text="cart" link={navCart} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default HeaderTop;
