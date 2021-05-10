import React from 'react';
import PropTypes from 'prop-types';
import Breadcum from '../../components/breadcum/Breadcum';
import Header from './components/Header';
import { FullscreenContainer, ViewContainer } from './styles';

const MainLayout = ({ children }) => (
  <FullscreenContainer>
    <Header />
    <Breadcum />
    <ViewContainer>
      {children}
    </ViewContainer>
  </FullscreenContainer>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
