import { RatingType, AppRouteType, MapIconsType, CityType, SortingType } from './types/types';

const INITIAL_LOCATION: CityType = {
  name: 'Paris',
  location: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13,
  },
};

const SortingValues: SortingType = {
  Popular: 'Popular',
  LowToHighPrice: 'Price: low to high',
  HighToLowPrice: 'Price: high to low',
  TopRated: 'Top rated first'
} as const;

// без объявления типа падает ошибка в reviews-form
const Rating: RatingType = {
  perfect: 5,
  good: 4,
  notBad: 3,
  badly: 2,
  terribly: 1,
};

const AppRoute: AppRouteType = {
  Root: '/',
  Favorites: '/favorites',
  Login: '/login',
  Offer: '/offer',
  AnyOther: '*',
} as const;

enum AuthorisationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const CommentLengthLimit = {
  Min: 50,
  Max: 300,
} as const;

const NEARBY_PLACES_MAX_COUNT = 3;

// константный объект тут не подойдет из-за библиотеки карт
const MapIcon: MapIconsType = {
  Default: {
    iconUrl: 'img/pin.svg',
    iconSize: [27, 39],
    iconAnchor: [13.5, 39],
  },
  Active: {
    iconUrl: 'img/pin-active.svg',
    iconSize: [27, 39],
    iconAnchor: [13.5, 39],
  },
};

const TitleLayerUrl = {
  Pattern:
    'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  Attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
} as const;

export {
  Rating,
  AppRoute,
  AuthorisationStatus,
  CommentLengthLimit,
  NEARBY_PLACES_MAX_COUNT,
  MapIcon,
  TitleLayerUrl,
  INITIAL_LOCATION,
  SortingValues
};
