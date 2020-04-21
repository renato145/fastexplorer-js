import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleWare from 'redux-saga';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers/rootReducer';
import { rootSaga } from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleWare();
const middleware = [...getDefaultMiddleware({thunk: false}), sagaMiddleware];
const store = configureStore({ reducer: rootReducer, middleware});
sagaMiddleware.run(rootSaga);

// const store = configureStore({ reducer: rootReducer });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider> ,
  document.getElementById('root')
);
