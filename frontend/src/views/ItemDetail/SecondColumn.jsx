import React from 'react';
import PropTypes from 'prop-types';
import {
  BuyButton,
  ConditionLabel,
  DetailSecondColumn,
  PriceLabel,
  ProductTitle,
} from './styles';

const currencyFormatter = require('currency-formatter');

const parseCondition = (condition) => {
  if (condition === 'new') {
    return 'Nuevo';
  }

  if (condition === 'used') {
    return 'Usado';
  }

  return '~';
};

const SecondColumn = ({
  condition,
  decimals,
  price,
  title,
  ...other
}) => (
  <DetailSecondColumn>
    <ConditionLabel>
      {`${parseCondition(condition)} - ${other.sold_quantity} vendidos`}
    </ConditionLabel>
    <ProductTitle>{title}</ProductTitle>
    <PriceLabel>
      {`$ ${currencyFormatter.format(price, {
        thousand: '.',
        precision: 0,
      })}`}
      <sup>{decimals}</sup>
    </PriceLabel>
    <BuyButton>
      Comprar
    </BuyButton>
  </DetailSecondColumn>
);

SecondColumn.propTypes = {
  condition: PropTypes.string.isRequired,
  decimals: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default SecondColumn;
