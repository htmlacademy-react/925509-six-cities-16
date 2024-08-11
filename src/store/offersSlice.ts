import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlaceType } from '../types/types';


// на Places переименовать потом возможно
// тут нужно типы офферов корректные добавить
type OffersState = {
  currentCity: string; // здесь объект может быть на самом деле
  offers: PlaceType[] | [];
  currentSortingOption: string;
};

const initialState: OffersState = {
  currentCity: 'Paris',
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
    setCurrentCity(state, action: PayloadAction<string>) {
      state.currentCity = action.payload;
    },
    setCurrentSortingOption(state, action: PayloadAction<string>) {
      state.currentSortingOption = action.payload;
    },
  },
});

export const { setOffers, setCurrentCity, setCurrentSortingOption } = offersSlice.actions;
export default offersSlice.reducer;
