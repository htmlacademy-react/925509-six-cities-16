import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';

import placesReducer from './places-slice';
import activePlaceIdReducer from './active-place-slice';
import currentPlaceReducer from './current-place-slice.ts';
import nearbyPlacesReducer from './nearby-places-slice.tsx';

const api = createAPI();

export const store = configureStore({
  reducer: {
    places: placesReducer,
    activePlace: activePlaceIdReducer,
    currentPlace: currentPlaceReducer,
    nearbyPlaces: nearbyPlacesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
