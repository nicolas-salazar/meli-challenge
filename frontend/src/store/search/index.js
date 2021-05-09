import { actions, reducer as searchReducer } from './slice';
import * as selectors from './selectors';

export const {
  resetSearchValue,
  setSearchValue,
} = actions;

export const {
  getSearchState,
  getSearchValue,
} = selectors;

export default searchReducer;
