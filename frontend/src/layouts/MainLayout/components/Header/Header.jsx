import React from 'react';
import {
  HeaderContainer,
  Logo,
  LogoContainer,
  PaddedContent,
} from './styles';
import LogoSource from '../../../../assets/logo_ML.png';
import SearchBar from '../SearchBar';

const Header = () => (
  <HeaderContainer>
    <PaddedContent>
      <LogoContainer>
        <Logo src={LogoSource} />
      </LogoContainer>
      <SearchBar />
    </PaddedContent>
  </HeaderContainer>
);

export default Header;
