import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlaceType, CityType, SortingTypeKey, RootState } from '../types/types';

import { INITIAL_LOCATION, RequestStatus } from '../const';
import { changeFavoriteStatus } from '../thunks/favorites';
import { fetchOffers } from '../thunks/places-list';

type PlacesState = {
  currentCity: CityType;
  items: PlaceType[];
  currentSortingOption: SortingTypeKey;
  requestStatus: RequestStatus;
};

const initialState: PlacesState = {
  currentCity: INITIAL_LOCATION,
  items: [],
  currentSortingOption: 'Popular',
  requestStatus: RequestStatus.Initial,
};

const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    setPlaces(state, action: PayloadAction<PlaceType[]>) {
      state.items = action.payload;
    },
    setCurrentCity(state, action: PayloadAction<CityType>) {
      state.currentCity = action.payload;
    },
    setCurrentSortingOption(state, action: PayloadAction<SortingTypeKey>) {
      state.currentSortingOption = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.requestStatus = RequestStatus.Success;
        state.items = action.payload;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.requestStatus = RequestStatus.Error;
      })
      .addCase(changeFavoriteStatus.fulfilled, (state, action) => {
        const targetItemIndex = state.items.findIndex(
          (item) => item.id === action.payload.offer.id
        );
        if (targetItemIndex >= 0) {
          state.items[targetItemIndex].isFavorite = action.payload.offer.isFavorite;
        }
      });
  },
});

const selectRequestStatus = (state: RootState) => state.places.requestStatus;
const selectCurrentCity = (state: RootState) => state.places.currentCity;
const selectPlacesList = (state: RootState) => state.places.items;
const selectCurrentSortingOption = (state: RootState) =>
  state.places.currentSortingOption;

export const { setPlaces, setCurrentCity, setCurrentSortingOption } =
  placesSlice.actions;
export {
  selectCurrentCity,
  selectPlacesList,
  selectCurrentSortingOption,
  selectRequestStatus,
};
export default placesSlice.reducer;
