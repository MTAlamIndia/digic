import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  categories: [],
  tags: [],
  brands: [],
  onSaleProducts: [],
  price: 0,
  minPrice: 0,
  maxPrice: 0,
  loading: true,
};

export const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {
    formatProducts(state, action) {
      const formattedProducts = action?.payload.map((item) => {
        const { id, createdAt, updatedAt } = item.sys;
        const images = item.fields.images.map((image) => image.fields.file.url);
        const products = { ...item.fields, id, createdAt, updatedAt, images };

        return products;
      });

      state.products = formattedProducts;
    },

    converDataToLowercase(state, { products, value }) {
      const lowercaseProducts = products?.map((item) => {
        if (!item[value]) {
          return item;
        } else {
          const values = item[value];
          let lowercaseValue;
          if (Array.isArray(values)) {
            lowercaseValue = values.map((item) => item.toLowerCase());
          } else {
            lowercaseValue = values.toLowerCase();
          }

          return {
            ...item,
            [value]: lowercaseValue,
          };
        }
      });
      state.products = lowercaseProducts;
    },

    getUnique(state, { products, value }) {
      const itemsArray = products
        ?.flatMap((item) => item[value])
        .filter(Boolean);
      const uniqueData = [...new Set(itemsArray.map((item) => item))];
      if (value === "category") {
        state.categories = uniqueData;
      }
      if (value === "tag") {
        state.tags = uniqueData;
      }
      if (value === "brand") {
        state.brands = uniqueData;
      }
    },

    getOnSaleProducts(state, { products }) {
      const onSaleProducts = products?.filter(
        (product) =>
          new Date(product.onSellDate) > new Date() && product.onSellPrice
      );

      state.onSaleProducts = onSaleProducts;
    },

    generateSlug(state, { products, value }) {
      const productsWithSlug = products.map((item) => {
        if (item[value]) {
          return item;
        } else {
          const slug = item.title
            .toLowerCase()
            .replace(/ /g, "-")
            .replace(/[^\w-]+/g, "");

          return {
            ...item,
            [value]: slug,
          };
        }
      });

      state.products = productsWithSlug;
    },

    getPrice(state, { payload }) {
      state.price = payload;
    },

    getProducts(state, action) {
      state.loading = true;

      productsSlice.caseReducers.formatProducts(state, action);

      // Lowercase the fields of category, tag, brand, slug
      productsSlice.caseReducers.converDataToLowercase(state, {
        products: state.products,
        value: "category",
      });

      productsSlice.caseReducers.converDataToLowercase(state, {
        products: state.products,
        value: "tag",
      });

      productsSlice.caseReducers.converDataToLowercase(state, {
        products: state.products,
        value: "brand",
      });

      productsSlice.caseReducers.converDataToLowercase(state, {
        products: state.products,
        value: "slug",
      });

      // get unique fields of category, tag, brand
      productsSlice.caseReducers.getUnique(state, {
        products: state.products,
        value: "category",
      });

      productsSlice.caseReducers.getUnique(state, {
        products: state.products,
        value: "tag",
      });

      productsSlice.caseReducers.getUnique(state, {
        products: state.products,
        value: "brand",
      });

      //generate slug
      productsSlice.caseReducers.generateSlug(state, {
        products: state.products,
        value: "slug",
      });

      // get on slae products
      productsSlice.caseReducers.getOnSaleProducts(state, {
        products: state.products,
      });

      const maxPrice = Math.max(...state.products.map((item) => item.price));
      const minPrice = Math.min(
        ...state.products.map((item) => item.onSellPrice || item.price)
      );

      state.price = maxPrice;
      state.maxPrice = maxPrice;
      state.minPrice = minPrice;
      state.loading = false;
    },
  },
});

export const { getProducts, getPrice } = productsSlice.actions;
