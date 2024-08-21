import { store } from '../store/store';

export type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type CityType = {
  name: string;
  location: LocationType;
};

export type PlaceType = {
  id: string;
  title: string;
  price: number;
  city: CityType;
  location: LocationType;

  type: string;
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  previewImage: string;
};

export interface PlaceExtendedType extends PlaceType {
  description: string;
  host: UserType;
  goods: string[];
  images: string[];
  maxAdults: number;
  bedrooms: number;
}

export type UserType = {
  isPro: boolean;
  name: string;
  avatarUrl: string;
};

export interface CurrentUserType extends UserType {
  email: string;
  token: string;
}

export type AuthDataType = {
  email: string;
  password: string;
}

export type LoginPayload = {
  email: string;
  password: string;
};

export type CommentType = {
  id: string;
  date: string;
  comment: string;
  rating: number;
  user: UserType;
}

export type CommentPayloadType = {
  id: string;
  body: {
    comment: string;
    rating: number;
  };
}

export type RatingType = {
  [key: string]: number;
};

export type SortingTypeKey =
  | 'Popular'
  | 'LowToHighPrice'
  | 'HighToLowPrice'
  | 'TopRated';

export type SortingType = {
  [key in SortingTypeKey]: string;
};

export type AppRouteType = {
  [key: string]: string;
};

export type ApiRouteType = {
  [key: string]: string;
};

export type MapIconType = {
  iconUrl: string;
  iconSize: [number, number];
  iconAnchor: [number, number];
};

export type MapIconsType = {
  Default: MapIconType;
  Active: MapIconType;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
