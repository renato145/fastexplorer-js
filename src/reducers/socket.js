import { createSlice } from '@reduxjs/toolkit';

const socketSlice = createSlice({
  name: 'socket',
  initialState: {
    status: 'waiting'
  },
  reducers: {
    socketConnected(state, action) {
      state.status = 'connected'; 
    }
  },
});

export const { socketConnected } = socketSlice.actions;
export const socket = socketSlice.reducer;
