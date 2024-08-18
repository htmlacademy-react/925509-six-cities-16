// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { PlaceExtendedType, RootState } from '../types/types';

import { RequestStatus } from '../const';

import { fetchCurrentOffer } from '../thunks/current-place';

type PlacesState = {
  data: PlaceExtendedType | null;
  requestStatus: RequestStatus;
};

const initialState: PlacesState = {
  data: null,
  requestStatus: RequestStatus.Initial,
};

const currentPlaceSlice = createSlice({
  name: 'currentPlace',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCurrentOffer.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(fetchCurrentOffer.fulfilled, (state, action) => {
        state.requestStatus = RequestStatus.Success;
        state.data = action.payload;
      })
      .addCase(fetchCurrentOffer.rejected, (state) => {
        state.requestStatus = RequestStatus.Error;
      });
  },
});

const selectRequestStatus = (state: RootState) =>
  state.currentPlace.requestStatus;
const selectOfferData = (state: RootState) => state.currentPlace.data;

export { selectRequestStatus, selectOfferData };
export default currentPlaceSlice.reducer;
