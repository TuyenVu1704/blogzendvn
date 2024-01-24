import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { mappingPostData } from '../helpers';
import postService from '../services/postService';

const initialState = {
  postsLatest: [],
  postsPopular: [],
  postsGeneral: {
    list: [],
    currentPage: 1,
    totalPages: 0,
  },
  postSearch: {
    list: [],
    currentPage: 1,
    totalPages: 0,
    total: 0
  },
  postCategory: {
    list: [],
    currentPage: 1,
    totalPages: 0,
    total: 0
  },
  postDetail: null
};

export const fetchPostsLatest = createAsyncThunk('post/fetchLatest', async () => {
  try {
    const res = await postService.getLatest();

    const items = res.data.map(mappingPostData);
    return items;
  } catch (err) {
    console.log(err);
  }
});

export const fetchPostsPopular = createAsyncThunk('post/fetchPopular', async () => {
  try {
    const res = await postService.getPopular();

    const items = res.data.map(mappingPostData);
    return items;
  } catch (err) {
    console.log(err);
  }
});

export const fetchPostsGeneral = createAsyncThunk('post/fetchGeneral', async (page = 1) => {
  try {
    const res = await postService.getGeneral(page);
    const totalPages = parseInt(res.headers['x-wp-totalpages']);

    const list = res.data.map(mappingPostData);
    return {
      list,
      totalPages,
      currentPage: page,
    };
  } catch (err) {
    console.log(err);
  }
});
export const fetchPostsSearch = createAsyncThunk('post/fetchPostsSearch', async (params = {}) => {
  try {
    const res = await postService.getSearch(params);
    const totalPages = parseInt(res.headers['x-wp-totalpages']);
    const total = parseInt(res.headers['x-wp-total']);
    const list = res.data.map(mappingPostData);

    return {
      list,
      totalPages,
      total,
      currentPage: params.page,
    };
  } catch (err) {
    console.log(err);
  }
});
export const fetchPostsCategoryById = createAsyncThunk('post/fetchPostsCategoryById', async (params = {}) => {
  try {
    const res = await postService.getCategoryById(params);
    const totalPages = parseInt(res.headers['x-wp-totalpages']);
    const total = parseInt(res.headers['x-wp-total']);
    const list = res.data.map(mappingPostData);

    return {
      list,
      totalPages,
      total,
      currentPage: params.page,
    };
  } catch (err) {
    console.log(err);
  }
});

export const fetchPostsDetailBySlug = createAsyncThunk('post/fetchPostsDetailBySlug', async (params) => {
  try {
    const res = await postService.getPostDetailBySlug(params);
    const items = res.data.map(mappingPostData);

    return items;
  } catch (err) {
    console.log(err);
  }
});


const postSlice = createSlice({
  name: 'post',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPostsLatest.fulfilled, (state, action) => {
      state.postsLatest = action.payload;
    });
    builder.addCase(fetchPostsPopular.fulfilled, (state, action) => {
      state.postsPopular = action.payload;
    });
    builder.addCase(fetchPostsGeneral.fulfilled, (state, action) => {
      const payload = action.payload;

      state.postsGeneral = {
        ...state.postsGeneral,
        ...payload,
        list: payload.currentPage === 1 ? payload.list : [...state.postsGeneral.list, ...payload.list],
      };
    });
    builder.addCase(fetchPostsSearch.fulfilled, (state, action) => {
      const payload = action.payload;

      state.postSearch = {
        ...state.postSearch,
        ...payload,
        list: payload.currentPage === 1 ? payload.list : [...state.postSearch.list, ...payload.list],
      };
    });
    builder.addCase(fetchPostsCategoryById.fulfilled, (state, action) => {
      const payload = action.payload;

      state.postCategory = {
        ...state.postCategory,
        ...payload,
        list: payload.currentPage === 1 ? payload.list : [...state.postCategory.list, ...payload.list],
      };
    });
    builder.addCase(fetchPostsDetailBySlug.fulfilled, (state, action) => {
      const payload = action.payload[0];

      state.postDetail = {

        ...payload

      };
    });
  },
});

const { reducer } = postSlice;

export default reducer;
