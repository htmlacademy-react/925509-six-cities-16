import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

import Header from '../../components/header/header';

import '../../styles/additional-styles.css';

function NotFoundPage(): JSX.Element {
  // в данном случае харкодим, потом из state будем информацию забирать
  const isAuthorized = true;

  return (
    <div className="page">
      <Header isAuthorized={isAuthorized} />

      <main className="page__main page__main--not-found">
        <div className="container">
          <h2 className="title">Such page doesn&apos;t exist.</h2>
          <Link to={AppRoute.Root} className="link">
            Go to main page
          </Link>
        </div>
      </main>
    </div>
  );
}

export default NotFoundPage;
