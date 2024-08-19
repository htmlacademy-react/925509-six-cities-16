// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { PlaceExtendedType, RootState, CommentType } from '../types/types';

import { RequestStatus } from '../const';

import { fetchCurrentOffer } from '../thunks/current-place';
import { fetchComments } from '../thunks/comment';

type PlacesState = {
  data: PlaceExtendedType | null;
  requestStatus: RequestStatus;
  requestCommentsStatus: RequestStatus;
  comments: CommentType[] | null;
};

const initialState: PlacesState = {
  data: null,
  requestStatus: RequestStatus.Initial,
  comments: null,
  requestCommentsStatus:  RequestStatus.Initial
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
        // console.log(action);
      })
      .addCase(fetchComments.pending, (state) => {
        state.requestCommentsStatus = RequestStatus.Loading;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.requestCommentsStatus = RequestStatus.Success;
        state.comments = action.payload;
      })
      .addCase(fetchComments.rejected, (state) => {
        state.requestCommentsStatus = RequestStatus.Error;
      });
  },
});

const selectRequestStatus = (state: RootState) =>
  state.currentPlace.requestStatus;
const selectOfferData = (state: RootState) => state.currentPlace.data;
const selectOfferComments = (state: RootState) => state.currentPlace.comments;

export { selectRequestStatus, selectOfferData, selectOfferComments };
export default currentPlaceSlice.reducer;
