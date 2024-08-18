import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';

import placesReducer from './places-slice';
import activePlaceIdReducer from './active-place-slice';

const api = createAPI();

export const store = configureStore({
  reducer: {
    places: placesReducer,
    activePlace: activePlaceIdReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
