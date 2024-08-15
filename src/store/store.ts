import { configureStore } from '@reduxjs/toolkit';

import placesReducer from './places-slice';
import activePlaceIdReducer from './active-place-slice';

export const store = configureStore({
  reducer: {
    places: placesReducer,
    activePlace: activePlaceIdReducer,
  },
});
