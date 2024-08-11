import { configureStore } from '@reduxjs/toolkit';

import offersReducer from './offersSlice';

export const store = configureStore({
  reducer: {
    offers: offersReducer
  }
});
