import { configureStore } from '@reduxjs/toolkit';
import loaderReducer from './loader';
import searchReducer from './search';

export default configureStore({
  reducer: {
    loader: loaderReducer,
    search: searchReducer,
  },
});
