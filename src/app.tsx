import { Login } from './pages/login/login';
import { Main } from './pages/main/main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFound } from './pages/not-found/not-found';
import { Offer } from './pages/offer/offer';
import { Favorites } from './pages/favorites/favorites';
import { PrivateRoute } from './components/private-route/private-route';
import { AppRoute } from './routes';

interface AppProps {
  offersCount: number;
  isAuthorised: boolean;
}

export const App = ({ offersCount, isAuthorised }: AppProps) => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Main offersCount={offersCount} />} />
      <Route path={AppRoute.Login} element={<Login />} />
      <Route path={AppRoute.Offer} element={<Offer />} />
      <Route path="*" element={<NotFound />} />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute isAuthorised={isAuthorised}>
            <Favorites />
          </PrivateRoute>
        }
      />
    </Routes>
  </BrowserRouter>
);
