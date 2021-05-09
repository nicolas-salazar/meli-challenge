import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state, { payload }) => ({
      ...state,
      searchValue: payload,
    }),
    resetSearchValue: (state) => ({
      ...state,
      searchValue: initialState.searchValue,
    }),
  },
  extraReducers: {},
});

export const { actions, reducer } = searchSlice;
