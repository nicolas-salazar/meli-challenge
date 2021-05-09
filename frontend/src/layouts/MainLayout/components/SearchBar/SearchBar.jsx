import React from 'react';
import {
  InputContainer,
  SearchButton,
  SearchIcon,
  SearchInput,
} from './style';
import SeachIcon from '../../../../assets/search_icon.png';

const SearchBar = () => (
  <InputContainer>
    <SearchInput
      placeholder="Nunca dejes de buscar"
    />
    <SearchButton>
      <SearchIcon src={SeachIcon} />
    </SearchButton>
  </InputContainer>
);

export default SearchBar;
