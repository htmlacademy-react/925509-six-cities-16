import { createSlice } from '@reduxjs/toolkit';
import { RootState, CurrentUserType } from '../types/types';
import { checkAuthorization, login, logout } from '../thunks/auth';
import { RequestStatus, AuthorisationStatus } from '../const';

type UserState = {
  data: CurrentUserType | null;
  requestStatus: RequestStatus;
  authorizationStatus: AuthorisationStatus;
};

const initialState: UserState = {
  data: null,
  requestStatus: RequestStatus.Initial,
  authorizationStatus: AuthorisationStatus.Unknown,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthorization.pending, (state) => {
        state.data = null;
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(checkAuthorization.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorisationStatus.Auth;
        state.data = action.payload;
        state.requestStatus = RequestStatus.Success;
      })
      .addCase(checkAuthorization.rejected, (state) => {
        state.authorizationStatus = AuthorisationStatus.NoAuth;
        state.requestStatus = RequestStatus.Error;
      })
      .addCase(login.pending, (state) => {
        state.requestStatus = RequestStatus.Loading;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.data = action.payload;
        state.requestStatus = RequestStatus.Success;
        state.authorizationStatus = AuthorisationStatus.Auth;
      })
      .addCase(login.rejected, (state) => {
        state.requestStatus = RequestStatus.Error;
        state.authorizationStatus = AuthorisationStatus.NoAuth;
      })
      .addCase(logout.fulfilled, (state) => {
        state.data = null;
        state.authorizationStatus = AuthorisationStatus.NoAuth;
      });
  },
});

const selectUserData = (state: RootState) => state.user.data;
const selectUserAuthStatus = (state: RootState) => state.user.authorizationStatus;
const selectUserRequestStatus = (state: RootState) => state.user.requestStatus;

export { selectUserData, selectUserAuthStatus, selectUserRequestStatus };
export default userSlice.reducer;
