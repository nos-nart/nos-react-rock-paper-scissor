import { configureStore } from '@reduxjs/toolkit';
import { gameSlice, GameReducer } from './game.slice';

const store = configureStore({
  reducer: {
    [gameSlice.name]: GameReducer,
  },
});

const dispatch = store.dispatch;
export { store, dispatch };
