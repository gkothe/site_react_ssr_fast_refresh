import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import LoginManager from './LoginManager';
import createReduxStore from './redux/reducers/createReduxStore';
import './assets/css/App.css';
import './assets/scriptsGeral.js';

const preloadedState = window.APP_STATE;
try {
  delete window.APP_STATE;
  document.getElementById("scriptredux").remove();
} catch (error) {
  console.log(error);
}
const store = createReduxStore({ preloadedState });
ReactDOM.hydrate(
  <BrowserRouter>
    <Provider store={store}>
      <LoginManager />
    </Provider>
  </BrowserRouter>,
  document.getElementById('app')
);
