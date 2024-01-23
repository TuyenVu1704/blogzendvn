import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { mappingCategoryData } from '../helpers';
import categoryService from '../services/categoryService';

const initialState = {
  categories: [],
};

const name = 'category';

export const fetchAllCategories = createAsyncThunk(`${name}/fetchAll`, async () => {
  try {
    const res = await categoryService.getAll();
    return res.data.map(mappingCategoryData);
  } catch (err) {
    console.log(err);
  }
});

const categorySlice = createSlice({
  name,
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

const { reducer } = categorySlice;

export default reducer;
