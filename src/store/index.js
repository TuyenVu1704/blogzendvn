import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categorySlice';
import menuReducer from './menuSlice';
import postReducer from './postSlice';

const store = configureStore({
  reducer: {
    POST: postReducer,
    CATEGORY: categoryReducer,
    MENU: menuReducer,
  },
});

export default store;
