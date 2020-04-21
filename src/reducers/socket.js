import { createSlice } from '@reduxjs/toolkit';

let ii = 0;

const socketSlice = createSlice({
  name: 'socket',
  initialState: {
    msg: '------',
    i: 0,
  },
  reducers: {
    test_rtx: {
      reducer(state, action) {
        const { text, ii } = action.payload;
        state.i++;
        state.msg = `Event received: ${text} (${state.i}) (${ii})`;
      },
      prepare({text}) {
        return { payload: { text, ii: ++ii}};
      }
    },
  },
});

export const { test_rtx } = socketSlice.actions;
export const socket = socketSlice.reducer;
