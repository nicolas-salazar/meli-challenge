export const getSearchState = (state) => state.search;
export const getSearchValue = (state) => getSearchState(state).searchValue;
export const getCategories = (state) => getSearchState(state)?.categories || [];
export const getSearchResults = (state) => getSearchState(state)?.results || [];
