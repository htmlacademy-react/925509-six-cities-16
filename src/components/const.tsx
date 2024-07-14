export const PLACES_COUNT: number = 312;

export type PlaceType = {
  title: string;
  price: string;
  type: string;
  description: string;
  link: string;
  isPremium: boolean;
  isInFavorite: boolean;
  rating: number;
  imgSrc: string;
};

export type LocationType = {
  title: string;
  link: string;
};

export const placesList: PlaceType[] = [
  {
    title: '',
    price: '€120',
    type: 'Apartment',
    description: 'Beautiful & luxurious apartment at great location',
    link: '#',
    isPremium: true,
    isInFavorite: true,
    rating: 4,
    imgSrc: 'img/apartment-01.jpg',
  },
  {
    title: '',
    price: '€80',
    type: 'Room',
    description: 'Wood and stone place',
    link: '#',
    isPremium: false,
    isInFavorite: true,
    rating: 4,
    imgSrc: 'img/room.jpg',
  },
  {
    title: '',
    price: '€132',
    type: 'Apartment',
    description: 'Canal View Prinsengracht',
    link: '#',
    isPremium: false,
    isInFavorite: false,
    rating: 4,
    imgSrc: 'img/apartment-02.jpg',
  },
  {
    title: '',
    price: '€180',
    type: 'Apartment',
    description: 'Nice, cozy, warm big bed apartment',
    link: '#',
    isPremium: true,
    isInFavorite: true,
    rating: 5,
    imgSrc: 'img/apartment-03.jpg',
  },
  {
    title: '',
    price: '€80',
    type: 'Room',
    description: 'Wood and stone place',
    link: '#',
    isPremium: false,
    isInFavorite: false,
    rating: 4,
    imgSrc: 'img/room.jpg',
  },
];

export const locationsList: LocationType[] = [
  {
    title: 'Paris',
    link: '#',
  },
  {
    title: 'Cologne',
    link: '#',
  },
  {
    title: 'Brussels',
    link: '#',
  },
  {
    title: 'Amsterdam',
    link: '#',
  },
  {
    title: 'Hamburg',
    link: '#',
  },
  {
    title: 'Dusseldorf',
    link: '#',
  },
];

export enum AppRoute {
  Root = '/',
  Favorites = '/favorites',
  Login = '/login',
  Offer = '/offer',
  AnyOther = '*'
}

export enum AutorisationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}
