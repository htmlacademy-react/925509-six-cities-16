import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginPage from '../../pages/login/login-page';
import FavoritesPage from '../../pages/favorites/favorites-page';
import OfferPage from '../../pages/offer/offer-page';
import NotFoundPage from '../../pages/not-found/not-found-page';

import MainPage from '../../pages/main/main-page';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<MainPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="offer/:id" element={<OfferPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
