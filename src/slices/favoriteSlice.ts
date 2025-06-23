import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { IPOI } from '../types/interfaces';

const FAVORITES_KEY = 'mappie_favorites';

function loadFavorites(): IPOI[] {
  try {
    const data = localStorage.getItem(FAVORITES_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function saveFavorites(favorites: IPOI[]) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

interface FavoriteState {
  items: IPOI[];
}

const initialState: FavoriteState = {
  items: loadFavorites(),
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<IPOI>) {
      if (!state.items.find((item) => item.id === action.payload.id)) {
        state.items.push(action.payload);
        saveFavorites(state.items);
      }
    },
    removeFavorite(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveFavorites(state.items);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
