import React from "react";
import { Box } from "@mui/system";
import { Tab, Tabs } from "@mui/material";
import PropTypes from "prop-types";

import "./ProductTabs.scss";
import { getRichText } from "../../store/getRichText";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`product-tabpanel-${index}`}
      aria-labelledby={`product-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }} className="product__tabs--content">
          {children}
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `product-tab-${index}`,
    "aria-controls": `product-tabpanel-${index}`,
  };
}

const ProductTabs = ({ fullDescription }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%" }} className="product__tabs">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="product tabs"
            className="product__tabs--buttons"
          >
            <Tab label="Description" {...a11yProps(0)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {getRichText(fullDescription)}
        </TabPanel>
      </Box>
    </>
  );
};

export default ProductTabs;
