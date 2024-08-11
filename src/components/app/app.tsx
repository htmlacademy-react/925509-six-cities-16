import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/storeHooks';

import { AppRoute, AuthorisationStatus } from '../../const';
import { placesList } from '../../mocks/mocks';

import LoginPage from '../../pages/login/login-page';
import FavoritesPage from '../../pages/favorites/favorites-page';
import OfferPage from '../../pages/offer/offer-page';
import NotFoundPage from '../../pages/not-found/not-found-page';
import MainPage from '../../pages/main/main-page';

import PrivateRoute from '../private-route/private-route';

import { setOffers } from '../../store/offersSlice';


function App(): JSX.Element {
  const dispatch = useAppDispatch();

  // при загрузке приложения загружаем список офферов - пока из моков
  useEffect(() => {
    dispatch(setOffers(placesList));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<MainPage />} />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route path={`${AppRoute.Offer}/:id`} element={<OfferPage />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorisationStatus={AuthorisationStatus.Auth}>
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
