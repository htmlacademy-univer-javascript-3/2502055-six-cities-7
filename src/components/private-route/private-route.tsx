import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  children: ReactElement;
  isAuthorised: boolean;
};

export const PrivateRoute = ({
  children,
  isAuthorised,
}: PrivateRouteProps) =>
  isAuthorised ? children : <Navigate to='/login' replace/>;
