import type { ILocationState } from '@appTypes/interfaces';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface ILocationStateWithRadius extends ILocationState {
  radius: string;
}

const initialState: ILocationStateWithRadius = {
  lat: null,
  lon: null,
  radius: '45',
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
    setSearchRadius(state, action: PayloadAction<string>) {
      state.radius = action.payload;
    },
  },
});

export const { setUserLocation, setSearchRadius } = userLocationSlice.actions;
export default userLocationSlice.reducer;
