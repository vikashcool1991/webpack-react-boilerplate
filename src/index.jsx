import { HashRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('app'),
);
registerServiceWorker();
