import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../routes';

type PrivateRouteProps = {
  children: ReactElement;
  isAuthorised: boolean;
};

export const PrivateRoute = ({
  children,
  isAuthorised,
}: PrivateRouteProps) =>
  isAuthorised ? children : <Navigate to={AppRoute.Login} replace/>;
