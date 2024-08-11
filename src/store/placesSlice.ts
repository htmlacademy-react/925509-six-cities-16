import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlaceType, CityType } from '../types/types';

import { INITIAL_LOCATION } from '../const';


// на Places переименовать потом возможно
type PlacesState = {
  currentCity: CityType;
  places: PlaceType[] | [];
  currentSortingOption: string;
};

const initialState: PlacesState = {
  currentCity: INITIAL_LOCATION,
  places: [],
  currentSortingOption: '',
};

const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    setPlaces(state, action: PayloadAction<PlaceType[]>) {
      state.places = action.payload;
    },
    setCurrentCity(state, action: PayloadAction<CityType>) {
      state.currentCity = action.payload;
    },
    setCurrentSortingOption(state, action: PayloadAction<string>) {
      state.currentSortingOption = action.payload;
    },
  },
});

export const { setPlaces, setCurrentCity, setCurrentSortingOption } = placesSlice.actions;
export default placesSlice.reducer;
