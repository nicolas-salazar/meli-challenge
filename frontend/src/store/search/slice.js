import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getSearchResults } from '../../services/search';

const initialState = {
  categories: [],
  loading: false,
  results: [],
  searchValue: '',
};

export const fetchSearchResults = createAsyncThunk(
  'search/fetchSearchResults',
  async (query) => {
    const data = await getSearchResults(query);
    return data;
  },
);

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state, { payload }) => ({
      ...state,
      searchValue: payload,
    }),
    resetSearchValue: () => ({
      ...initialState,
    }),
  },
  extraReducers: {
    [fetchSearchResults.pending]: (state) => ({
      ...state,
      loading: true,
    }),
    [fetchSearchResults.fulfilled]: (state, { payload: { categories, items } }) => ({
      ...state,
      categories,
      loading: false,
      results: items,
    }),
    [fetchSearchResults.rejected]: (state) => ({
      ...state,
      loading: false,
    }),
  },
});

export const { actions, reducer } = searchSlice;
