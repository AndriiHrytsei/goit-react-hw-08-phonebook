import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.user;
      state.isLoggedIn = true;
    },
    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.user;
      state.isLoggedIn = true;
    },
    [logout.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload
      state.isLoggedIn = true
      state.isRefreshing = false
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false
    }
  },
});

export const authReducer = authSlice.reducer