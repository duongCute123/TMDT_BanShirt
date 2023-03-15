import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducer from './component/reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store=createStore(allReducer);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

