import Header from '../../components/header/header';
import FavoritesList from '../../components/favorites/favorites-locations-list';

import { placesList } from '../../mocks/mocks';

function FavoritesPage(): JSX.Element {
  // в данном случае харкодим, потом из state будем информацию забирать
  const isAuthorized = true;

  return (
    <div className="page">
      <Header isAuthorized={isAuthorized} />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList places={placesList} />
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesPage;
