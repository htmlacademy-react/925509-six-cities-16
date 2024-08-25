import { createSlice } from '@reduxjs/toolkit';

import { RequestStatus } from '../const';
import { PlaceType, RootState } from '../types/types';
import { fetchFavorites, changeFavoriteStatus } from '../thunks/favorites';

type FavoritePlacesState = {
  data: PlaceType[];
  requestStatus: RequestStatus;
  requestChangeStatus: RequestStatus;
};

const initialState: FavoritePlacesState = {
  data: [],
  requestStatus: RequestStatus.Initial,
  requestChangeStatus: RequestStatus.Initial,
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
      })
      .addCase(changeFavoriteStatus.pending, (state) => {
        state.requestChangeStatus = RequestStatus.Loading;
      })
      .addCase(changeFavoriteStatus.fulfilled, (state, action) => {
        // console.log(action.payload);

        const currentOffer = action.payload.offer;

        if (currentOffer.isFavorite) {
          state.data.push(action.payload.offer);
        } else {
          state.data = state.data.filter((item) => item.id !== currentOffer.id);
        }

        state.requestChangeStatus = RequestStatus.Success;
      })
      .addCase(changeFavoriteStatus.rejected, (state) => {
        state.requestChangeStatus = RequestStatus.Error;
      });
  },
});

const selectFavoritesData = (state: RootState) => state.favorites.data;

export { selectFavoritesData };
export default favoritePlacesSlice.reducer;
