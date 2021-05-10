import { configureStore } from '@reduxjs/toolkit';
import detailsReducer from './details';
import loaderReducer from './loader';
import searchReducer from './search';

export default configureStore({
  reducer: {
    details: detailsReducer,
    loader: loaderReducer,
    search: searchReducer,
  },
});
