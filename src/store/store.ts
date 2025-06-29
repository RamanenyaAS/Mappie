import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';
import poiReducer from '../slices/poiSlice';
import favoriteReducer from '../slices/favoriteSlice';
import userLocationReducer from '../slices/userLocationSlice';
import routeRedicer from '../slices/routeSlice';

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
