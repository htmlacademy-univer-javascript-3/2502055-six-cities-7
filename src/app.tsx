import { LoginPage } from './pages/login/login';
import { MainPage } from './pages/main/main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './pages/not-found/not-found';
import { OfferPage } from './pages/offer/offer';
import { FavoritesPage } from './pages/favorites/favorites';
import { PrivateRoute } from './components/private-route/private-route';

interface AppProps {
  offersCount: number;
  isAuthorised: boolean;
}

export const App = ({ offersCount, isAuthorised }: AppProps) => (
  <BrowserRouter>
    <Routes>
      <Route index element={<MainPage offersCount={offersCount} />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/offer/:id" element={<OfferPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route
        path="/favorites"
        element={
          <PrivateRoute isAuthorised={isAuthorised}>
            <FavoritesPage />
          </PrivateRoute>
        }
      />
    </Routes>
  </BrowserRouter>
);
