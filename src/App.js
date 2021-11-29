import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";

import Header from "./components/header/Header";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import SingleProduct from "./pages/SingleProduct";

import {
  navCart,
  navCategory,
  navShop,
  navWishlist,
} from "./store/navigations";
import Shop from "./pages/Shop";

import { getProducts } from "./store/productsSlice";
import { data } from "./store/data";

import Wishlist from "./pages/Wishlist";

import "./App.scss";
import Cart from "./pages/Cart";

const App = () => {
  const dispatch = useDispatch();

  const THEME = createTheme({
    typography: {
      fontFamily: `"Poppins", sans-serif`,
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
    },
  });

  useEffect(() => {
    dispatch(getProducts(data));
  }, [dispatch]);

  return (
    <>
      <ThemeProvider theme={THEME}>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path={navShop} component={Shop} exact />
          <Route path={`${navCategory}:category`} component={Shop} exact />
          <Route path={`${navShop}:slug`} component={SingleProduct} exact />
          <Route path={navWishlist} component={Wishlist} exact />
          <Route path={navCart} component={Cart} exact />
        </Switch>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
