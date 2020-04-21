import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers/rootReducer';

const middleware = getDefaultMiddleware({thunk: false});
const store = configureStore({ reducer: rootReducer, middleware});
// const store = configureStore({ reducer: rootReducer });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider> ,
  document.getElementById('root')
);
