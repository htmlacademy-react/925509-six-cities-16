import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useAppDispatch } from '../../hooks/store-hooks';
import 'react-toastify/dist/ReactToastify.css';
import { HelmetProvider } from 'react-helmet-async';

import { AppRoute, AuthorisationStatus, ToastMessage } from '../../const';

import LoginPage from '../../pages/login/login-page';
import FavoritesPage from '../../pages/favorites/favorites-page';
import OfferPage from '../../pages/offer/offer-page';
import NotFoundPage from '../../pages/not-found/not-found-page';
import MainPage from '../../pages/main/main-page';

import PrivateRoute from '../private-route/private-route';

import { fetchOffers } from '../../thunks/places-list';
import { useAppSelector } from '../../hooks/store-hooks';
import { selectUserAuthStatus } from '../../store/user-slice';
import { checkAuthorization } from '../../thunks/auth';
import { fetchFavorites } from '../../thunks/favorites';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOffers());
    dispatch(checkAuthorization())
      .unwrap()
      .then(() => {
        dispatch(fetchFavorites());
      });
  }, [dispatch]);

  const userAuthStatus = useAppSelector(selectUserAuthStatus);
  const isAuthorized = userAuthStatus === AuthorisationStatus.Auth;

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
