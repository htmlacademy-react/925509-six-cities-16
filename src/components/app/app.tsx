import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/store-hooks';

import { AppRoute, AuthorisationStatus } from '../../const';
// import { placesList } from '../../mocks/mocks';

import LoginPage from '../../pages/login/login-page';
import FavoritesPage from '../../pages/favorites/favorites-page';
import OfferPage from '../../pages/offer/offer-page';
import NotFoundPage from '../../pages/not-found/not-found-page';
import MainPage from '../../pages/main/main-page';

import PrivateRoute from '../private-route/private-route';

// import { setPlaces } from '../../store/places-slice';
import { fetchOffers } from '../../thunks/places-list';
import { useAppSelector } from '../../hooks/store-hooks';
import { selectUserAuthStatus } from '../../store/user-slice';
import { checkAuthorization } from '../../thunks/auth';


function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(setPlaces(placesList));
    dispatch(fetchOffers());
    dispatch(checkAuthorization());
  }, [dispatch]);

  const userAuthStatus = useAppSelector(selectUserAuthStatus);
  const isAuthorized = userAuthStatus === AuthorisationStatus.Auth;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<MainPage isAuthorized={isAuthorized}/>} />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route path={`${AppRoute.Offer}/:id`} element={<OfferPage isAuthorized={isAuthorized}/>} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute isAuthorized={isAuthorized}>
                <FavoritesPage />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path={AppRoute.AnyOther} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
