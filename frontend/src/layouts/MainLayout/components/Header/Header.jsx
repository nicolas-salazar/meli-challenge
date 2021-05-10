import React from 'react';
import { HeaderContainer, Logo, LogoContainer } from './styles';
import LogoSource from '../../../../assets/logo_ML.png';
import SearchBar from '../SearchBar';
import { ContentColumn } from '../../styles';

const Header = () => (
  <HeaderContainer>
    <ContentColumn>
      <LogoContainer>
        <Logo src={LogoSource} />
      </LogoContainer>
      <SearchBar />
    </ContentColumn>
  </HeaderContainer>
);

export default Header;
