/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './example.css';
import App from './page-admin';
import PageStore from './page-store';
import * as serviceWorker from './serviceWorker';

PageStore.on('change', () => {
  console.log('on change: ', PageStore.getState());
});

// console.log('all pages: ', PageStore.getState());

// PageDispatcher.dispatch({
//   action: 'ADD_PAGE',
// });

console.log('all pages: ', PageStore.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
