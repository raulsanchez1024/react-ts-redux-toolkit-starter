import { createSlice } from '@reduxjs/toolkit';

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
    setCounter(state, action) {
      state.counter = action.payload;
    },
  },
});

export const { setCounter } = homeSlice.actions;
export const homeReducer = homeSlice.reducer;
