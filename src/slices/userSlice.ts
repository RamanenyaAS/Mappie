import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { IUserSlice } from '../types/interfaces';

const initialState: IUserSlice = {
  email: null,
  token: null,
  id: null,
  emailVerified: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserSlice>) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.emailVerified = action.payload.emailVerified ?? false;
    },
    removeUser: (state) => {
      state.id = null;
      state.email = null;
      state.token = null;
      state.emailVerified = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
