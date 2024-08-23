import { RatingType, AppRouteType, ApiRouteType, MapIconsType, CityType, SortingType } from './types/types';

const PASSWORD_REG_EXP = /^(?=.*[A-Za-z])(?=.*\d).+$/;
const EMAIL_REG_EXP = /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)+([a-z]{2,18})$/;

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

const ApiRoute: ApiRouteType = {
  Offers: '/offers',
  Login: '/login',
  Logout: '/logout',
  Comments: '/comments',
  Favorite: '/favorite',
} as const;

enum AuthorisationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

enum RequestStatus {
  Initial = 'initial',
  Loading = 'loading',
  Success = 'success',
  Error = 'error',
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

const locationsList: CityType[] = [
  {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    }
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.89797,
      zoom: 13
    }
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.55034,
      longitude: 10.000654,
      zoom: 13
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    }
  }
];

export {
  Rating,
  AppRoute,
  ApiRoute,
  AuthorisationStatus,
  RequestStatus,
  CommentLengthLimit,
  NEARBY_PLACES_MAX_COUNT,
  MapIcon,
  TitleLayerUrl,
  INITIAL_LOCATION,
  PASSWORD_REG_EXP,
  EMAIL_REG_EXP,
  SortingValues,
  locationsList
};
