import React from 'react';
import PropTypes from 'prop-types';
import {
  FreeShippingIcon,
  MetadataContainer,
  PriceLabel,
  TitleLabel,
} from './styles';
import FreeShippingIconSource from '../../../assets/shipping_icon.png';

const currencyFormatter = require('currency-formatter');

const MetadataBox = ({ freeShipping, price, title }) => (
  <MetadataContainer>
    <PriceLabel>
      <span>
        {
          `$ ${currencyFormatter.format(price, {
            thousand: '.',
            precision: 0,
          })}`
        }
      </span>
      {
        freeShipping && (
          <FreeShippingIcon src={FreeShippingIconSource} />
        )
      }
    </PriceLabel>
    <TitleLabel>{title}</TitleLabel>
  </MetadataContainer>
);

MetadataBox.propTypes = {
  freeShipping: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default MetadataBox;
