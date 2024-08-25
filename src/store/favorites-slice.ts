import { createSlice } from '@reduxjs/toolkit';

import { RequestStatus } from '../const';
import { PlaceType, RootState } from '../types/types';

import { fetchFavorites } from '../thunks/favorites';

type FavoritePlacesState = {
  data: PlaceType[] | null;
  requestStatus: RequestStatus;
};

const initialState: FavoritePlacesState = {
  data: null,
  requestStatus: RequestStatus.Initial,
};

const favoritePlacesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavorites.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.requestStatus = RequestStatus.Success;
        state.data = action.payload;
      })
      .addCase(fetchFavorites.rejected, (state) => {
        state.requestStatus = RequestStatus.Error;
      });
  },
});

const selectFavoritesData = (state: RootState) => state.favorites.data;

export { selectFavoritesData };
export default favoritePlacesSlice.reducer;
