import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AppRoute } from '../../const';

import Header from '../../components/header/header';

import '../../styles/additional-styles.css';

type NotFoundPageProps = {
  isAuthorized: boolean;
};

function NotFoundPage(props: NotFoundPageProps): JSX.Element {
  const { isAuthorized } = props;

  return (
    <div className="page">
      <Helmet>
        <title>6 cities: 404 page</title>
      </Helmet>
      <Header isAuthorized={isAuthorized} isLoginPage={false} />

      <main className="page__main page__main--not-found">
        <div className="container">
          <h1 className="visually-hidden">
            404 page
          </h1>
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
