import React from "react";
import { Box } from "@mui/system";
import CategoryWidget from "../../shop/CategoryWidget";
import PriceWidget from "../../shop/PriceWidget";
import BrandWidget from "../../shop/BrandWidget";

import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <>
      <aside>
        <Box className="sidebar__widget">
          <CategoryWidget />
        </Box>
        <Box className="sidebar__widget">
          <PriceWidget />
        </Box>
        <Box className="sidebar__widget">
          <BrandWidget />
        </Box>
      </aside>
    </>
  );
};

export default Sidebar;
