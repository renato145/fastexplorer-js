import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { reducer } from './store/reducer'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware} from 'redux';
import createSagaMiddleWare from 'redux-saga';
import { rootSaga} from './sagas/saga'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const sagaMiddleWare = createSagaMiddleWare();
const store = createStore(reducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// ReactDOM.render(<App />, document.getElementById('root'));
