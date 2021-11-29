import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import FeaturedCategories from "../components/featuredCategories/FeaturedCategories";
import HomeFilteredProducts from "../components/homeFilteredProducts/HomeFilteredProducts";
import HomeMainSlider from "../components/homeMainSlider/HomeMainSlider";
import HotDeals from "../components/hotDeals/HotDeals";
import TopCategories from "../components/topCategories/TopCategories";
import { activateCategoriesList } from "../store/categoryListSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(activateCategoriesList());
  }, [dispatch]);

  return (
    <>
      <HomeMainSlider />
      <FeaturedCategories />
      <HotDeals />
      <TopCategories />
      <HomeFilteredProducts />
    </>
  );
};

export default Home;
