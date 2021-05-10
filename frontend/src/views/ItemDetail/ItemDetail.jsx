import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { ContentColumn } from '../../layouts/MainLayout/styles';
import { DetailContainerCard } from './styles';
import { fetchItemDetails } from '../../store/details/slice';
import { getItemDetails } from '../../store/details/selectors';
import FirstColumn from './FirstColumn';
import SecondColumn from './SecondColumn';

const ItemDetail = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const detailsData = useSelector(getItemDetails);

  useEffect(() => {
    if (!detailsData) {
      const pathname = location.pathname.split('/');
      const id = pathname[pathname.length - 1];
      dispatch(fetchItemDetails(id));
    }
  }, []);

  return (
    <ContentColumn>
      <DetailContainerCard>
        <FirstColumn
          description={detailsData?.description}
          picture={detailsData?.picture}
        />
        <SecondColumn
          condition={detailsData?.condition}
          decimals={detailsData?.price?.decimals || '00'}
          price={detailsData?.price?.amount || 0}
          sold_quantity={detailsData?.sold_quantity}
          title={detailsData?.title}
        />
      </DetailContainerCard>
    </ContentColumn>
  );
};

export default ItemDetail;
