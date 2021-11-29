import React from "react";
import { Box } from "@mui/system";
import { Container, List, ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { RiArrowDropRightLine } from "react-icons/ri";

import "./BannerBreadcrumb.scss";
import Title from "./Title";

const BannerBreadcrumb = ({ links, pageTitle }) => {
  return (
    <>
      <Box
        style={{ background: "url('/images/banner-breadcrumb.webp')" }}
        className="banner__breadcrumb"
      >
        <Container>
          {pageTitle && <Title title={pageTitle} />}
          <List className="breadcrumb">
            <ListItem>
              <Link to="/">Home</Link>
              <RiArrowDropRightLine />
            </ListItem>
            {links.map(({ name, link }, i, arr) => {
              const pageName = name.replaceAll("/", "").replaceAll("-", " ");
              return (
                <ListItem key={i}>
                  {arr.length === i + 1 ? (
                    <>
                      <Typography component="span">{pageName}</Typography>
                    </>
                  ) : (
                    <>
                      <Link to={link}>{pageName}</Link>
                      <RiArrowDropRightLine />
                    </>
                  )}
                </ListItem>
              );
            })}
          </List>
        </Container>
      </Box>
    </>
  );
};

export default BannerBreadcrumb;
