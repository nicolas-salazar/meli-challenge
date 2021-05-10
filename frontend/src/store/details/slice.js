import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getItemDetails } from '../../services/detail';

const initialState = {
  loading: false,
  itemData: null,
};

export const fetchItemDetails = createAsyncThunk(
  'search/fetchItemDetails',
  async (query) => {
    const data = await getItemDetails(query);
    return data;
  },
);

export const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
  },
  extraReducers: {
    [fetchItemDetails.pending]: (state) => ({
      ...state,
      loading: true,
    }),
    [fetchItemDetails.fulfilled]: (state, { payload: { item } }) => ({
      ...state,
      loading: false,
      itemData: item,
    }),
    [fetchItemDetails.rejected]: (state) => ({
      ...state,
      loading: false,
      itemData: {},
    }),
  },
});

export const { actions, reducer } = detailsSlice;
