import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const CustomLink = ({ icon, text }) => {
  return (
    <>
      {icon && icon}
      <Typography variant="body2" component="span">
        {text}
      </Typography>
    </>
  );
};

const HeaderTopContent = (props) => {
  if (!props.link.includes("/")) {
    return (
      <a href={props.link}>
        <CustomLink {...props} />
      </a>
    );
  }
  return (
    <>
      <Link to={props.link}>
        <CustomLink {...props} />
      </Link>
    </>
  );
};

export default HeaderTopContent;
