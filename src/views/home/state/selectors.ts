import { RootState } from 'store';

export const getCounter = (state: RootState) =>
state.home.counter
