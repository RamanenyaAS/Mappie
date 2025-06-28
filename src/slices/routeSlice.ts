import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface RouteState {
  target: { lat: number; lon: number } | null;
}

const initialState: RouteState = {
  target: null,
};

const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {
    setRouteTarget: (
      state,
      action: PayloadAction<{ lat: number; lon: number }>
    ) => {
      state.target = action.payload;
    },
    clearRouteTarget: (state) => {
      state.target = null;
    },
  },
});

export const { setRouteTarget, clearRouteTarget } = routeSlice.actions;
export default routeSlice.reducer;
