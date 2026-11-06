import { Navigate, Outlet } from 'react-router-dom';
import { AppRoute } from '@/routes';

type PrivateRouteProps = {
  isAuthorised: boolean;
};

export const PrivateRoute = ({ isAuthorised }: PrivateRouteProps) =>
  isAuthorised ? <Outlet /> : <Navigate to={AppRoute.Login} replace />;
