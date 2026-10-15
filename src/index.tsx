import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import { OFFERS } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App isAuthorised offers={OFFERS} />
  </React.StrictMode>,
);
