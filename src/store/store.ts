import { configureStore } from '@reduxjs/toolkit';

import placesReducer from './placesSlice';
import activePlaceIdReducer from './activePlaceSlice';

export const store = configureStore({
  reducer: {
    places: placesReducer,
    activePlace: activePlaceIdReducer,
  },
});
