import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FavoritesList from '../../components/favorites/favorites-locations-list';

import { useAppSelector } from '../../hooks/store-hooks';
import { selectFavoritesData } from '../../store/favorites-slice';

type PageProps = {
  isAuthorized: boolean;
};

function FavoritesPage(props: PageProps): JSX.Element {
  const { isAuthorized } = props;

  const favoritePlaces = useAppSelector(selectFavoritesData);

  return (
    <div className="page">
      <Header isAuthorized={isAuthorized} isLoginPage={false} />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList places={favoritePlaces} />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
