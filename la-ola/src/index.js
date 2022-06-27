import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import './i18n'; 
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <Suspense fallback={<div>loading...</div>}>
        <App />
      </Suspense>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
