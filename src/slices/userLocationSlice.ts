import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ILocationState } from '../types/interfaces';

const initialState: ILocationState = {
  lat: null,
  lon: null,
};

const userLocationSlice = createSlice({
  name: 'userLocation',
  initialState,
  reducers: {
    setUserLocation(
      state,
      action: PayloadAction<{ lat: number; lon: number }>
    ) {
      state.lat = action.payload.lat;
      state.lon = action.payload.lon;
    },
  },
});

export const { setUserLocation } = userLocationSlice.actions;
export default userLocationSlice.reducer;
