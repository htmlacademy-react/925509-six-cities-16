import { Navigate } from 'react-router-dom';
import { AuthorisationStatus, AppRoute } from '../../const';

type PrivateRouteProps = {
  authorisationStatus: AuthorisationStatus;
  children: JSX.Element;
};

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { children, authorisationStatus } = props;

  return authorisationStatus === AuthorisationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
