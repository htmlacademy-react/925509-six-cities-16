import { Navigate } from 'react-router-dom';
import { AutorisationStatus, AppRoute } from '../const';

type PrivateRouteProps = {
  autorisationStatus: AutorisationStatus;
  children: JSX.Element;
};

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { children, autorisationStatus } = props;

  return (
    autorisationStatus === AutorisationStatus.Auth ? children : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
