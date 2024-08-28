import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { useAppDispatch } from '../../hooks/store-hooks';
import 'react-toastify/dist/ReactToastify.css';
import { HelmetProvider } from 'react-helmet-async';

import { AppRoute, AuthorisationStatus, RequestStatus } from '../../const';

import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import MainPage from '../../pages/main-page/main-page';

import PrivateRoute from '../private-route/private-route';
import { selectUserRequestStatus } from '../../store/user-slice';
import { selectRequestStatus } from '../../store/places-slice';

import { fetchOffers } from '../../thunks/places-list';
import { useAppSelector } from '../../hooks/store-hooks';
import { selectUserAuthStatus } from '../../store/user-slice';
import { checkAuthorization } from '../../thunks/auth';
import { fetchFavorites } from '../../thunks/favorites';
import Loader from '../loader/loader';
import { getToken } from '../../services/token';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuthorization())
      .unwrap()
      .then(() => {
        dispatch(fetchFavorites());
      })
      // если убрать catch(), то тесты pages падают
      .catch(() => null);
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  const userAuthStatus = useAppSelector(selectUserAuthStatus);
  const userRequestStatus = useAppSelector(selectUserRequestStatus);
  const placesRequestStatus = useAppSelector(selectRequestStatus);
  const isAuthorized = userAuthStatus === AuthorisationStatus.Auth;

  const isLoading =
    userRequestStatus === (getToken() && RequestStatus.Loading) ||
    placesRequestStatus === RequestStatus.Loading;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path={AppRoute.Root}>
            <Route index element={<MainPage isAuthorized={isAuthorized} />} />
            <Route
              path={AppRoute.Login}
              element={
                <PrivateRoute isAuthorized={isAuthorized} nonAuthOnly>
                  <LoginPage />
                </PrivateRoute>
              }
            />
            <Route
              path={`${AppRoute.Offer}/:id`}
              element={<OfferPage isAuthorized={isAuthorized} />}
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute isAuthorized={isAuthorized} nonAuthOnly={false}>
                  <FavoritesPage isAuthorized={isAuthorized} />
                </PrivateRoute>
              }
            />
          </Route>
          <Route
            path={AppRoute.AnyOther}
            element={<NotFoundPage isAuthorized={isAuthorized} />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
