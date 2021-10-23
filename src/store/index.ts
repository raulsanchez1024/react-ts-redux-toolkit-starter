import { configureStore } from '@reduxjs/toolkit';

import { HomeState, homeReducer } from 'views/home/state/slice';

export type RootState = {
  home: HomeState;
};

export const store = configureStore({
  reducer: {
    home: homeReducer,
  },
});
