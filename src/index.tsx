import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import { OFFERS } from './mocks/offers';
import { OFFER_DETAILS } from './mocks/offer-details';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App isAuthorised={false} offers={OFFERS} offerDetails={OFFER_DETAILS} />
  </React.StrictMode>,
);
