import React from 'react';
import Breadcum from '../../components/breadcum/Breadcum';
import Header from './components/Header';
import { FullscreenContainer } from './styles';

const MainLayout = () => (
  <FullscreenContainer>
    <Header />
    <Breadcum />
  </FullscreenContainer>
);

export default MainLayout;
