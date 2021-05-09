import { createSlice } from '@reduxjs/toolkit';

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
});

export const { actions, reducer } = loaderSlice;
