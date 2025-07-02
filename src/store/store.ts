import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from '@slices/favoriteSlice';
import poiReducer from '@slices/poiSlice';
import routeRedicer from '@slices/routeSlice';
import userLocationReducer from '@slices/userLocationSlice';
import userReducer from '@slices/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    poi: poiReducer,
    favorite: favoriteReducer,
    userLocation: userLocationReducer,
    route: routeRedicer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
