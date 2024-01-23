import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { mappingMenuData } from '../helpers';
import menuService from '../services/menuService';

const initialState = {
  menus: [],
};

export const fetchAllMenus = createAsyncThunk('menu/fetchAll', async () => {
  try {
    const res = await menuService.getAll();
    const items = res.data.items;
    return items.map(mappingMenuData);
  } catch (err) {
    console.log(err);
  }
});

const menuSlice = createSlice({
  name: 'menu',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllMenus.fulfilled, (state, action) => {
      state.menus = action.payload;
    });
  },
});

const { reducer } = menuSlice;

export default reducer;
