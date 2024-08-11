import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type activePlaceIdState = {
  id: string;
};

const initialState: activePlaceIdState = {
  id: '',
};

const activePlaceIdSlice = createSlice({
  name: 'activePlaceId',
  initialState,
  reducers: {
    setActivePlaceId(state, action: PayloadAction<string>) {
      state.id = action.payload;
    },
  },
});

export const { setActivePlaceId } = activePlaceIdSlice.actions;
export default activePlaceIdSlice.reducer;
