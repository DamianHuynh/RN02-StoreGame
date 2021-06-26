import React from 'react';
import {useSelector} from 'react-redux';

const withLoading = Component => props => {
  const isLoading = useSelector(state => state.loadingReducer.isLoading);
  return <Component isLoading={isLoading} {...props} />;
};

export default withLoading;
