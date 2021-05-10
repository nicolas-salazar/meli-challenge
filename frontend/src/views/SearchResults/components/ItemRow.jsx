import React from 'react';
import PropTypes from 'prop-types';
import {
  ItemSummaryContainer,
  LocationLabel,
  MetadataContainer,
  PaddedContent,
  Thumbnail,
} from './styles';

const ItemSummary = ({ data }) => {
  const {
    picture,
    location,
  } = data;

  return (
    <ItemSummaryContainer>
      <PaddedContent>
        <Thumbnail src={picture} />
        <MetadataContainer />
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
  }).isRequired,
};

export default ItemSummary;
