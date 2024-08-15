import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlaceType, CityType, SortingTypeKey, RootState } from '../types/types';

import { INITIAL_LOCATION } from '../const';


type PlacesState = {
  currentCity: CityType;
  items: PlaceType[];
  currentSortingOption: SortingTypeKey;
};

const initialState: PlacesState = {
  currentCity: INITIAL_LOCATION,
  items: [],
  currentSortingOption: 'Popular',
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
  }
});

const selectCurrentCity = (state: RootState) => state.places.currentCity;
const selectPlacesList = (state: RootState) => state.places.items;
const selectCurrentSortingOption = (state: RootState) => state.places.currentSortingOption;

export const { setPlaces, setCurrentCity, setCurrentSortingOption } = placesSlice.actions;
export { selectCurrentCity, selectPlacesList, selectCurrentSortingOption };
export default placesSlice.reducer;
