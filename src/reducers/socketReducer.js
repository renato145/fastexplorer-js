import { createSlice } from '@reduxjs/toolkit';

const socketSlice = createSlice({
  name: 'socket',
  initialState: {
    status: 'waiting',
    data: null,
  },
  reducers: {
    socketConnected(state) {
      state.status = 'connected';
    },
    socketClosed(state) {
      state.status = 'closed';
    },
    socketReceiveData(state, action) {
      const { data } = action.payload;
      state.data = data;
    },
  },
});

export const { socketConnected, socketClosed, socketReceiveData } = socketSlice.actions;
export const socketReducer = socketSlice.reducer;
