import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';

import placesReducer from './places-slice/places-slice.ts';
import activePlaceIdReducer from './active-place-slice/active-place-slice';
import currentPlaceReducer from './current-place-slice/current-place-slice.ts';
import nearbyPlacesReducer from './nearby-places-slice/nearby-places-slice.ts';
import userReducer from './user-slice/user-slice';
import favoritesReducer from './favorites-slice/favorites-slice.ts';

const api = createAPI();

export const store = configureStore({
  reducer: {
    places: placesReducer,
    activePlace: activePlaceIdReducer,
    currentPlace: currentPlaceReducer,
    nearbyPlaces: nearbyPlacesReducer,
    user: userReducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
