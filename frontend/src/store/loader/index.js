import { actions, reducer as loaderReducer } from './slice';
import * as selectors from './selectors';

export const {
  turnOn, turnOf,
} = actions;

export const {
  getSearchState,
  getSearchValue,
} = selectors;

export default loaderReducer;
