import { createSlice } from '@reduxjs/toolkit';
import { PlaceExtendedType, RootState, CommentType } from '../../types/types';

import { RequestStatus } from '../../const';

import { fetchCurrentOffer } from '../../thunks/current-place';
import { changeFavoriteStatus } from '../../thunks/favorites';
import { fetchComments, sendComment } from '../../thunks/comment';

type PlacesState = {
  data: PlaceExtendedType | null;
  requestStatus: RequestStatus;
  requestCommentsStatus: RequestStatus;
  requestCommentSendStatus: RequestStatus;
  comments: CommentType[];
};

const initialState: PlacesState = {
  data: null,
  requestStatus: RequestStatus.Initial,
  comments: [],
  requestCommentsStatus: RequestStatus.Initial,
  requestCommentSendStatus: RequestStatus.Initial,
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
      })
      .addCase(sendComment.pending, (state) => {
        state.requestCommentSendStatus = RequestStatus.Loading;
      })
      .addCase(sendComment.fulfilled, (state, action) => {
        state.requestCommentSendStatus = RequestStatus.Success;
        state.comments?.push(action.payload);
      })
      .addCase(sendComment.rejected, (state) => {
        state.requestCommentSendStatus = RequestStatus.Error;
      })
      .addCase(changeFavoriteStatus.fulfilled, (state, action) => {
        if (state.data) {
          state.data.isFavorite = action.payload.offer.isFavorite;
        }
      });
  },
});

const selectRequestStatus = (state: RootState) =>
  state.currentPlace.requestStatus;
const selectRequestCommentSendStatus = (state: RootState) =>
  state.currentPlace.requestCommentSendStatus;
const selectOfferData = (state: RootState) => state.currentPlace.data;
const selectOfferComments = (state: RootState) => state.currentPlace.comments;

export {
  selectRequestStatus,
  selectOfferData,
  selectOfferComments,
  selectRequestCommentSendStatus,
};
export default currentPlaceSlice.reducer;
