import { createSlice } from '@reduxjs/toolkit';
import { RootState, PlaceType } from '../types/types';
import { fetchNearbyPlaces } from '../thunks/nearby-place';
import { RequestStatus } from '../const';

type NearbyPlacesState = {
  data: PlaceType[];
  requestStatus: RequestStatus;
};

const initialState: NearbyPlacesState = {
  data: [],
  requestStatus: RequestStatus.Initial
};

const nearbyPlacesSlice = createSlice({
  name: 'nearbyPlaces',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchNearbyPlaces.fulfilled, (state, action) => {
      state.requestStatus = RequestStatus.Success;
      state.data = action.payload;
    });
  },
});

const selectNearbyRequestStatus = (state: RootState) =>
  state.nearbyPlaces.requestStatus;
const selectNearbyOffers = (state: RootState) => state.nearbyPlaces.data;

export { selectNearbyRequestStatus, selectNearbyOffers };

export default nearbyPlacesSlice.reducer;
