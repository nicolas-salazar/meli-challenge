import React, { useCallback, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  InputContainer,
  SearchButton,
  SearchIcon,
  SearchInput,
} from './styles';
import SeachIcon from '../../../../assets/search_icon.png';
import { getSearchValue } from '../../../../store/search/selectors';
import { setSearchValue } from '../../../../store/search';
import { SEARCH_BAR_PLACEHOLDER } from '../../../../utils/consts';
import { fetchSearchResults } from '../../../../store/search/slice';

const SearchBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const searchValue = useSelector(getSearchValue);

  const executeSearch = useCallback((targetValue) => {
    const searchQuery = targetValue || searchValue;
    if (searchQuery) {
      history.push(`/items?q=${searchQuery}`);
      dispatch(fetchSearchResults(searchQuery));
    }
  }, [dispatch, history, searchValue]);

  useEffect(() => {
    if (location.search) {
      const queryParamValue = (location.search || '').replace('?q=', '');
      if (queryParamValue !== searchValue) {
        executeSearch(queryParamValue);
      }
    }
  }, []);

  const onChangeHandler = useCallback((e) => {
    const newValue = e?.target?.value || null;
    if (newValue !== searchValue) {
      dispatch(setSearchValue(newValue || ''));
    }
  }, [
    searchValue,
  ]);

  const onKeyUpHandler = (e) => {
    if (e.keyCode === 13) {
      executeSearch(e.target.value);
    }
  };

  return (
    <InputContainer>
      <SearchInput
        onChange={onChangeHandler}
        onKeyUp={onKeyUpHandler}
        placeholder={SEARCH_BAR_PLACEHOLDER}
        type="text"
        value={searchValue}
      />
      <SearchButton onClick={() => executeSearch()}>
        <SearchIcon src={SeachIcon} />
      </SearchButton>
    </InputContainer>
  );
};

export default SearchBar;
