import { configureStore } from "@reduxjs/toolkit";
import getProductsSlice from "./slices/fetchProductsSlice";
import getProductByIdSlice from "./slices/fetchProductByIdSlice";
import deleteProductByIdSlice from "./slices/DeleteProductSlice";
import addProductSlice from "./slices/CreateProductSlice";
import editProductByIdSlice from "./slices/EditProductSlice";
export default configureStore({
    reducer: {
      get_products: getProductsSlice,
      get_product_by_id: getProductByIdSlice,
      delete_product_by_id: deleteProductByIdSlice,
      add_new_product: addProductSlice,
      edit_product_by_id: editProductByIdSlice
    }
  });