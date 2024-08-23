import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FavoritesList from '../../components/favorites/favorites-locations-list';

import { placesList } from '../../mocks/mocks';

function FavoritesPage(): JSX.Element {
  // в данном случае харкодим, потом из state будем информацию забирать
  const isAuthorized = true;

  return (
    <div className="page">
      <Header isAuthorized={isAuthorized} isLoginPage={false}/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList places={placesList} />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
