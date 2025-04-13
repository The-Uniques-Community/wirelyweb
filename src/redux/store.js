import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './slices/categorySlice';
// ...other reducers

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    // ...other reducers
  },
});

export default store;