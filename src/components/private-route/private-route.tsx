import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../const';

type PrivateRouteProps = {
  isAuthorized: boolean;
  nonAuthOnly: boolean;
  children: JSX.Element;
};

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { children, isAuthorized, nonAuthOnly } = props;
  if (nonAuthOnly) {
    return isAuthorized === true ? <Navigate to={AppRoute.Root} /> : children ;
  }

  return isAuthorized === true ? children : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;
