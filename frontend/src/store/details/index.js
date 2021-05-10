import { reducer as detailReducer } from './slice';
import * as selectors from './selectors';

export const {
  getDetailsState,
} = selectors;

export default detailReducer;
