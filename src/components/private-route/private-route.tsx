import { Navigate, Location, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';

type PrivateRouteProps = {
  isAuthorized: boolean;
  nonAuthOnly: boolean;
  children: JSX.Element;
};

type FromState = {
  from?: Location;
};

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { children, isAuthorized, nonAuthOnly } = props;
  const location: Location<FromState> = useLocation() as Location<FromState>;

  if (isAuthorized && nonAuthOnly) {
    const from = location.state?.from || { pathname: AppRoute.Root};
    return <Navigate to={from} />;
  }
  if (!isAuthorized && !nonAuthOnly) {
    return <Navigate state={{ from: location}} to={AppRoute.Login} />;
  }

  return children;

}

export default PrivateRoute;
