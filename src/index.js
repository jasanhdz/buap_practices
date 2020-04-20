import React from 'react';
import ReactDom from 'react-dom';
import App from './routes/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';

const store = createStore(
  reducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const container = document.getElementById('app');

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
);
