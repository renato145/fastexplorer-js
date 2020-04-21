import { createSlice } from '@reduxjs/toolkit';

let ii = 0;

export const prepareSocket = ({text}) => ({ payload: { text, ii: ++ii}});

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
      prepare: prepareSocket
    },
  },
});

export const { test_rtx } = socketSlice.actions;
export const socket = socketSlice.reducer;
