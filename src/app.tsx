import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from '@/pages/login/login';
import { Main } from '@/pages/main/main';
import { NotFound } from '@/pages/not-found';
import { Offer } from '@/pages/offer/offer';
import { Favorites } from '@/pages/favorites';
import { PrivateRoute } from '@/components/private-route/private-route';
import { AppRoute } from '@/routes';
import type { OfferDetail, OfferPreview } from '@/types/offer';

interface AppProps {
  isAuthorised: boolean;
  offers: OfferPreview[];
  offerDetails: OfferDetail[];
}

export const App = ({ isAuthorised, offers, offerDetails }: AppProps) => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Main offers={offers} />} />
      <Route path={AppRoute.Login} element={<Login />} />
      <Route
        path={AppRoute.Offer}
        element={
          <Offer
            details={offerDetails}
            offers={offers}
            isAuthorised={isAuthorised}
          />
        }
      />
      <Route element={<PrivateRoute isAuthorised={isAuthorised} />}>
        <Route
          path={AppRoute.Favorites}
          element={<Favorites offers={offers} />}
        />
      </Route>
      <Route path={AppRoute.NotFound} element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
