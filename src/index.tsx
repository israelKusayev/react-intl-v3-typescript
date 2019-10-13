import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import IntlConfig from './intlConfig';

ReactDOM.render(
  <IntlConfig>
    <App />
  </IntlConfig>,
  document.getElementById('root')
);

// https://stackoverflow.com/questions/45783677/react-intl-accessing-nested-messages
