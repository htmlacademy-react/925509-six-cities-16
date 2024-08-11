import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlaceType, CityType } from '../types/types';

import { INITIAL_LOCATION } from '../const';


// на Places переименовать потом возможно
type OffersState = {
  currentCity: CityType;
  offers: PlaceType[] | [];
  currentSortingOption: string;
};

const initialState: OffersState = {
  currentCity: INITIAL_LOCATION,
  offers: [],
  currentSortingOption: '',
};

const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    setOffers(state, action: PayloadAction<PlaceType[]>) {
      state.offers = action.payload;
    },
    setCurrentCity(state, action: PayloadAction<CityType>) {
      state.currentCity = action.payload;
    },
    setCurrentSortingOption(state, action: PayloadAction<string>) {
      state.currentSortingOption = action.payload;
    },
  },
});

export const { setOffers, setCurrentCity, setCurrentSortingOption } = offersSlice.actions;
export default offersSlice.reducer;
