import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../types/types';

type ActivePlaceIdState = {
  id: string;
};

const initialState: ActivePlaceIdState = {
  id: '',
};

const activePlaceIdSlice = createSlice({
  name: 'activePlace',
  initialState,
  reducers: {
    setActivePlaceId(state, action: PayloadAction<string>) {
      state.id = action.payload;
    },
  },
});

const selectActivePlaceId = (state: RootState) => state.activePlace.id;

export const { setActivePlaceId } = activePlaceIdSlice.actions;
export { selectActivePlaceId };
export default activePlaceIdSlice.reducer;
