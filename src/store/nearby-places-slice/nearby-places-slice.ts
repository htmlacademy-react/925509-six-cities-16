import { createSlice } from '@reduxjs/toolkit';
import { RootState, PlaceType } from '../../types/types';
import { fetchNearbyPlaces } from '../../thunks/nearby-place';

type NearbyPlacesState = {
  data: PlaceType[];
};

const initialState: NearbyPlacesState = {
  data: [],
};

const nearbyPlacesSlice = createSlice({
  name: 'nearbyPlaces',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchNearbyPlaces.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

const selectNearbyOffers = (state: RootState) => state.nearbyPlaces.data;

export { selectNearbyOffers };

export default nearbyPlacesSlice.reducer;
