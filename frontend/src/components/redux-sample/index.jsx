import React from 'react';
import { useSelector } from 'react-redux';
import { getLoaderStatus } from '../../store/loader/selectors';

const ReduxSample = () => {
  const loaderStatus = useSelector(getLoaderStatus);
  return (
    <div>
      The value:
      {loaderStatus.toString()}
    </div>
  );
};

export default ReduxSample;
