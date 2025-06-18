import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import poiReducer from './slices/poiSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    poi: poiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
