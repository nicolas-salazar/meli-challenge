import React from 'react';
import { HeaderContainer, Logo } from './styles';
import LogoSource from '../../../../assets/logo_ML.png';
import SearchBar from '../SearchBar';

const Header = () => (
  <HeaderContainer>
    <Logo src={LogoSource} />
    <SearchBar />
  </HeaderContainer>
);

export default Header;
