import React from 'react';
import PropTypes from 'prop-types';
import {
  DescriptionText,
  DescriptionTitle,
  DetailFirstColumn,
  ProductImage,
  ProductImageContainer,
} from './styles';
import { DESCRIPTION_TITLE_LABEL } from '../../utils/consts';

const FirstColumn = ({ description, picture }) => (
  <DetailFirstColumn>
    <ProductImageContainer>
      <ProductImage src={picture} />
    </ProductImageContainer>
    <DescriptionTitle>{DESCRIPTION_TITLE_LABEL}</DescriptionTitle>
    <DescriptionText>{description}</DescriptionText>
  </DetailFirstColumn>
);

FirstColumn.propTypes = {
  description: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default FirstColumn;
