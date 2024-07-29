import { RatingType, AppRouteType } from './types/types';

// без объявления типа падает ошибка в reviews-form
const Rating: RatingType = {
  'perfect' : 5,
  'good' : 4,
  'notBad' : 3,
  'badly' : 2,
  'terribly' : 1
};

const AppRoute: AppRouteType = {
  Root : '/',
  Favorites : '/favorites',
  Login : '/login',
  Offer : '/offer',
  AnyOther : '*'
} as const;

enum AuthorisationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

const CommentLengthLimit = {
  Min: 50,
  Max: 300
} as const;

const NEARBY_PLACES_MAX_COUNT = 3;

export {
  Rating,
  AppRoute,
  AuthorisationStatus,
  CommentLengthLimit,
  NEARBY_PLACES_MAX_COUNT
};
