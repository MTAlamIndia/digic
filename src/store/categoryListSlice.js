import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCategoryListActive: true,
};

export const categoryListSlice = createSlice({
  name: "categoryListSlice",
  initialState,
  reducers: {
    toggleCategoriesList(state) {
      state.isCategoryListActive = !state.isCategoryListActive;
    },
    activateCategoriesList(state) {
      state.isCategoryListActive = true;
    },
    deactivateCategoriesList(state) {
      state.isCategoryListActive = false;
    },
  },
});

export const {
  toggleCategoriesList,
  activateCategoriesList,
  deactivateCategoriesList,
} = categoryListSlice.actions;
