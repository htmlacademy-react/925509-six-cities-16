import { Link } from 'react-router-dom';
import { logout } from '../../thunks/auth';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks/store-hooks';
import { selectUserData } from '../../store/user-slice';
import { useAppSelector } from '../../hooks/store-hooks';
import '../../styles/additional-styles.css';

type HeaderProps = {
  isAuthorized: boolean;
  isLoginPage: boolean;
};

function Header(props: HeaderProps): JSX.Element {
  const { isAuthorized, isLoginPage } = props;
  const dispatch = useAppDispatch();
  const userData = useAppSelector(selectUserData);

  // const { email, name, avatarUrl, isPro } = userData;

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              className="header__logo-link header__logo-link--active"
              to={AppRoute.Root}
            >
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width={81}
                height={41}
              />
            </Link>
          </div>
          {isAuthorized && (
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={AppRoute.Favorites}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                      <img className='user__avatar--image' src={userData?.avatarUrl} alt="" />
                    </div>
                    <span className="header__user-name user__name">
                      {userData?.email}
                    </span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to={AppRoute.Login}>
                    <span
                      className="header__signout"
                      onClick={handleLogoutClick}
                    >
                      Sign out
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          )}
          {!isAuthorized && !isLoginPage && (
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={AppRoute.Login}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
