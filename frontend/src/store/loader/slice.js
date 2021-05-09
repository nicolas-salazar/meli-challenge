import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSampleData = createAsyncThunk(
  'loader/fetchSampleData',
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 2500));
    return null;
  },
);

export const loaderSlice = createSlice({
  name: 'loader',
  initialState: {
    active: true,
  },
  reducers: {
    turnOn: (state) => ({
      ...state,
      active: true,
    }),
    turnOff: (state) => ({
      ...state,
      active: false,
    }),
  },
  extraReducers: {
    [fetchSampleData.pending]: (state) => ({
      ...state,
      active: true,
    }),
    [fetchSampleData.fulfilled]: (state) => ({
      ...state,
      active: false,
    }),
    [fetchSampleData.rejected]: (state) => ({
      ...state,
      active: false,
    }),
  },
});

export const { actions, reducer } = loaderSlice;
