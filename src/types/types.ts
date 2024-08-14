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

export type RatingType = {
  [key: string]: number;
}

export type SortingTypeKey = 'Popular' | 'LowToHighPrice' | 'HighToLowPrice' | 'TopRated';

export type SortingType = {
  [key in SortingTypeKey]: string;
}

export type AppRouteType = {
  [key: string]: string;
}

export type MapIconType = {
  iconUrl: string;
  iconSize: [number, number];
  iconAnchor: [number, number];
}

export type MapIconsType = {
  Default: MapIconType;
  Active: MapIconType;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;