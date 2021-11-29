import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";
import { categoryListSlice } from "./categoryListSlice";
import { filterSlice } from "./filterSlice";

import { productsSlice } from "./productsSlice";
import { relatedProductsSlice } from "./relatedProductsSlice";
import { searchSlice } from "./searchSlice";
import { wishlishSlice } from "./wishlistSlice";

export const store = configureStore({
  reducer: {
    productsReducer: productsSlice.reducer,
    categoryListReducer: categoryListSlice.reducer,
    searchReducer: searchSlice.reducer,
    filterReducer: filterSlice.reducer,
    cartReducer: cartSlice.reducer,
    wishlistReducer: wishlishSlice.reducer,
    relatedProductsReducer: relatedProductsSlice.reducer,
  },
});
