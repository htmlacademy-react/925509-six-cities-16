import { Helmet } from 'react-helmet-async';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { FavoritesList } from '../../components/favorites/index';

import { useAppSelector } from '../../hooks/store-hooks';
import { selectFavoritesData } from '../../store/favorites-slice';

type PageProps = {
  isAuthorized: boolean;
};

function FavoritesPage(props: PageProps): JSX.Element {
  const { isAuthorized } = props;

  const favoritePlaces = useAppSelector(selectFavoritesData);

  const isEmpty = !favoritePlaces.length;

  return (
    <div
      className={`
        page
        ${isEmpty ? 'page--favorites-empty' : ''}
      `}
    >
      <Helmet>
        <title>6 cities: favorites page</title>
      </Helmet>
      <Header isAuthorized={isAuthorized} isLoginPage={false} />
      {!isEmpty && (
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <FavoritesList places={favoritePlaces} />
            </section>
          </div>
        </main>
      )}
      {isEmpty && (
        <main className="page__main page__main--favorites page__main--favorites-empty">
          <div className="page__favorites-container container">
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">
                  Save properties to narrow down search or plan your future
                  trips.
                </p>
              </div>
            </section>
          </div>
        </main>
      )}
      <Footer />
    </div>
  );
}

export default FavoritesPage;
