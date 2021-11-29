import { useSelector } from "react-redux";

import { Box } from "@mui/system";
import Title from "../ui/Title";
import { Container, List } from "@mui/material";

import CategoryItem from "./CategoryItem";

import "./TopCategories.scss";

const TopCategories = () => {
  const { categories } = useSelector((state) => state.productsReducer);

  return (
    <>
      <section>
        <Box
          style={{ background: "url(./images/bg1.jpg)" }}
          className="top__categories"
        >
          <Container>
            <Box textAlign="center">
              <Title title="top categories" />
            </Box>
            <List>
              {categories.map((item, i) => (
                <CategoryItem key={i} title={item} />
              ))}
            </List>
          </Container>
        </Box>
      </section>
    </>
  );
};

export default TopCategories;
