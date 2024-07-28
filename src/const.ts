import { RatingType } from './types/types';

const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;

// без объявления типа падает ошибка в reviews-form
const Rating: RatingType = {
  'perfect' : 5,
  'good' : 4,
  'notBad' : 3,
  'badly' : 2,
  'terribly' : 1
};

enum AppRoute {
  Root = '/',
  Favorites = '/favorites',
  Login = '/login',
  Offer = '/offer',
  AnyOther = '*'
}

enum AuthorisationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export {
  CITIES,
  Rating,
  AppRoute,
  AuthorisationStatus
};
