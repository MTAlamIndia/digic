import React from "react";
import { List, ListItem } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Box } from "@mui/system";
import { navShop } from "../../../store/navigations";

const HeaderNavigations = () => {
  return (
    <>
      <Box className="header__bottom--nav">
        <List>
          <ListItem>
            <NavLink to="/" activeClassName="active" exact>
              Home
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to={navShop} activeClassName="active" exact>
              Shop
            </NavLink>
          </ListItem>
        </List>
      </Box>
    </>
  );
};

export default HeaderNavigations;
