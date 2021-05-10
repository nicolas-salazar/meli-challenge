import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  ItemSummaryContainer,
  LocationLabel,
  PaddedContent,
  Thumbnail,
} from './styles';
import MetadataBox from './MetadataBox';

const ItemSummary = ({ data }) => {
  const {
    id,
    location,
    picture,
    price,
    title,
    ...rest
  } = data;

  const goToDetail = useCallback(() => {
    window.location.replace(`/items/${id}`);
  }, [id]);

  return (
    <ItemSummaryContainer onClick={() => goToDetail()}>
      <PaddedContent>
        <Thumbnail src={picture} />
        <MetadataBox
          freeShipping={rest.free_shipping}
          price={price.amount}
          title={title}
        />
        <LocationLabel>{location}</LocationLabel>
      </PaddedContent>
    </ItemSummaryContainer>
  );
};

ItemSummary.propTypes = {
  data: PropTypes.objectOf({
    id: PropTypes.string,
    picture: PropTypes.string,
    location: PropTypes.string,
    price: PropTypes.objectOf({
      amount: PropTypes.number,
      currency: PropTypes.string,
      decimals: PropTypes.string,
    }),
    title: PropTypes.string,
    freeShipping: PropTypes.bool.isRequired,
  }).isRequired,
};

export default ItemSummary;
