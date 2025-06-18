import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IPOI, IPOIState, IOverpassElement } from '../../types/interfaces';

const initialState: IPOIState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchPOI = createAsyncThunk<
  IPOI[],
  { lat: number; lon: number; radius: number; category: string },
  { rejectValue: string }
>(
  'poi/fetchPOI',
  async ({ lat, lon, radius, category }, { rejectWithValue }) => {
    const query = `
    [out:json];
    (
      node["tourism"="${category}"](around:${radius},${lat},${lon}));
      way["tourism"="${category}"](around:${radius},${lat},${lon}));
      relation["tourism"="${category}"](around:${radius},${lat},${lon}));
    )
    out center;
  `;
    try {
      const response = await fetch('https://overpass-api.de/api/interpreter', {
        method: 'POST',
        body: query,
      });
      const data = await response.json();
      const pois: IPOI[] = (data.elements || []).map(
        (elem: IOverpassElement) => ({
          id: String(elem.id),
          lat: elem.lat || elem.center?.lat,
          lon: elem.lon || elem.center?.lon,
          name: elem.tags?.name,
          category,
        })
      );
      return pois;
    } catch (error) {
      console.error('Ошибка при загрузке POI:', error); // временно
      return rejectWithValue('Ошибка загрузки POI');
    }
  }
);

const poiSlice = createSlice({
  name: 'poi',
  initialState,
  reducers: {
    clearPOI: (state) => {
      state.items = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    return builder
      .addCase(fetchPOI.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPOI.fulfilled, (state, action: PayloadAction<IPOI[]>) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchPOI.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearPOI } = poiSlice.actions;
export default poiSlice.reducer;
