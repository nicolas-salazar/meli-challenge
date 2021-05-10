import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  ItemSummaryContainer,
  LocationLabel,
  PaddedContent,
  Thumbnail,
} from './styles';
import MetadataBox from './MetadataBox';
import { fetchItemDetails } from '../../../store/details/slice';

const ItemSummary = ({ data }) => {
  const {
    id,
    location,
    picture,
    price,
    title,
    ...rest
  } = data;

  const dispatch = useDispatch();
  const history = useHistory();

  const goToDetail = useCallback(() => {
    history.push(`/items/${id}`);
    dispatch(fetchItemDetails(id));
  }, [dispatch, history, id]);

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
  data: PropTypes.shape({
    id: PropTypes.string,
    picture: PropTypes.string,
    location: PropTypes.string,
    price: PropTypes.shape({
      amount: PropTypes.number,
      currency: PropTypes.string,
      decimals: PropTypes.string,
    }),
    title: PropTypes.string,
  }).isRequired,
};

export default ItemSummary;
