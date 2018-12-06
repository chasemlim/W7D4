import React from 'react';
import { Provider } from 'react-redux';

const Root = ({ store }) => {
  return (
  <Provider store={store}>
    <div>WE'RE ON SELECTORS, YOU MAROONS</div>
  </Provider>
)};

export default Root;