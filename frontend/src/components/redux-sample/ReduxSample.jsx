import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLoaderStatus } from '../../store/loader/selectors';
import { fetchSampleData } from '../../store/loader/slice';

const ReduxSample = () => {
  const dispatch = useDispatch();
  const loaderStatus = useSelector(getLoaderStatus);

  // useEffect(() => {
  //   dispatch(fetchSampleData());
  // }, []);

  return (
    <div>
      The value:
      {loaderStatus.toString()}
    </div>
  );
};

export default ReduxSample;
