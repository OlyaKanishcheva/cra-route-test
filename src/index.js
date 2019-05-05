import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import storeFactory from './store';

const store = storeFactory();

window.React = React;
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>, 
  document.getElementById('root')
);

serviceWorker.unregister();
