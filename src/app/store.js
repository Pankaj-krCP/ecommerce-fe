import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/user/userSlice";
import productReducer from "../features/products/productSlice";
import brandReducer from "../features/brand/brandSlice";
import pcategoryReducer from "../features/pcategory/pcategorySlice";
import bcategoryReducer from "../features/bcategory/bcategorySlice";
import productFilterReducer from "../features/filter/productFilterSlice";
import blogFilterReducer from "../features/filter/blogFilterSlice";
import blogReducer from "../features/blogs/blogSlice";
import contactReducer from "../features/contact/contactSlice";
import selectedProductReducer from "../features/temp/selectedProductSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    brand: brandReducer,
    pcategory: pcategoryReducer,
    bcategory: bcategoryReducer,
    productFilter: productFilterReducer,
    blogFilter: blogFilterReducer,
    blog: blogReducer,
    contact: contactReducer,
    selectedProduct: selectedProductReducer,
  },
});
