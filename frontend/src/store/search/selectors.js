export const getSearchState = (state) => state.search;
export const getSearchValue = (state) => getSearchState(state).searchValue;
export const getCategories = (state) => getSearchState(state)?.categories || [];
