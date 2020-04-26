import { createSlice } from '@reduxjs/toolkit';

const socketSlice = createSlice({
  name: 'socket',
  initialState: {
    status: 'waiting',
    connectedBefore: false,
    data: null,
    inputImage: null,
    heatmap: null,
    heatmaps: [], // TODO (multiple heatmaps)
  },
  reducers: {
    socketConnected(state) {
      state.status = 'connected';
      state.connectedBefore = true;
    },
    socketClosed(state) {
      state.status = 'closed';
    },
    socketReceiveData(state, action) {
      const { data } = action.payload;
      state.data = JSON.parse(data);
    },
    socketInvalidEvent(state, action) {
      const { type } = action.payload;
      console.error('Type not recognized by server:', type);
    },
    socketReceiveImageInput(state, action) {
      state.inputImage = action.payload;
    },
    socketNoImageHeatmap(state, action) {
      console.error('Heatmap not valid.');
    },
    socketReceiveHeatmap(state, action) {
      state.heatmap = action.payload;
    },
    socketError(state, action) {
      const { msg } = action.payload;
      console.error('Error:', msg)
    },
    socketServerClosed(state, action) {
      const { msg } = action.payload;
      console.error(msg);
    },
  },
});

export const {
  socketConnected,
  socketClosed,
  socketReceiveData,
} = socketSlice.actions;
export const socketReducer = socketSlice.reducer;
