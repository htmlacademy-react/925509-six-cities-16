import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppRoute, AuthorisationStatus } from '../../const';

import LoginPage from '../../pages/login/login-page';
import FavoritesPage from '../../pages/favorites/favorites-page';
import OfferPage from '../../pages/offer/offer-page';
import NotFoundPage from '../../pages/not-found/not-found-page';
import MainPage from '../../pages/main/main-page';

import PrivateRoute from '../private-route/private-route';

function App(): JSX.Element {
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
              <PrivateRoute authorisationStatus={AuthorisationStatus.NoAuth}>
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
