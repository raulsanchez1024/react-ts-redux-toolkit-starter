import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type HomeState = {
  counter: number;
};

const initialState = {
  counter: 0,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setCounter(state, action: PayloadAction<number>) {
      state.counter = action.payload;
    },
  },
});

export const { setCounter } = homeSlice.actions;
export const homeReducer = homeSlice.reducer;
