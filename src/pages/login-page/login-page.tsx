import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  AppRoute,
  ToastMessage,
  locationsList,
  INITIAL_LOCATION,
  PASSWORD_REG_EXP,
  EMAIL_REG_EXP,
} from '../../const';
import { getRandomArrayElement } from '../../utils';

import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';
import { login } from '../../thunks/auth';

import {
  selectUserAuthStatus,
  selectUserRequestStatus,
} from '../../store/user-slice';
import { AuthorisationStatus, RequestStatus } from '../../const';
import { setCurrentCity } from '../../store/places-slice';
import { fetchFavorites } from '../../thunks/favorites';

import Header from '../../components/header/header';

function LoginPage(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setFormValidity] = useState(false);
  const [randomCity, setRandomCity] = useState(INITIAL_LOCATION);

  const dispatch = useAppDispatch();
  const requestStatus = useAppSelector(selectUserRequestStatus);
  const navigate = useNavigate();

  useEffect(() => {
    const city = getRandomArrayElement(locationsList);
    setRandomCity(city);
  }, []);

  const isLoading = requestStatus === RequestStatus.Loading;

  const isPasswordValid = (passwordValue: string) =>
    PASSWORD_REG_EXP.test(passwordValue);
  const isEmailValid = (emailValue: string) => EMAIL_REG_EXP.test(emailValue);

  const handleEmailChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setEmail(evt.target.value);
    setFormValidity(
      isPasswordValid(password) && isEmailValid(evt.target.value)
    );
  };

  const handlePasswordChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setPassword(evt.target.value);
    setFormValidity(isPasswordValid(evt.target.value) && isEmailValid(email));
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!isFormValid) {
      return;
    }

    dispatch(login({ email, password }))
      .unwrap()
      .then(() => {
        dispatch(fetchFavorites());
        navigate(AppRoute.Root);
      })
      .catch(() => {
        toast.error(ToastMessage.ServerError);
      });
  };

  const handleCityClick = (): void => {
    dispatch(setCurrentCity(randomCity));
  };

  const userAuthStatus = useAppSelector(selectUserAuthStatus);
  const isAuthorized = userAuthStatus === AuthorisationStatus.Auth;

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 cities: login page</title>
      </Helmet>
      <Header isAuthorized={isAuthorized} isLoginPage />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={handleFormSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  onChange={handleEmailChange}
                  disabled={isLoading}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  onChange={handlePasswordChange}
                  disabled={isLoading}
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
                disabled={!isFormValid || isLoading}
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to={AppRoute.Root}
                onClick={handleCityClick}
              >
                <span>{randomCity && randomCity.name}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
