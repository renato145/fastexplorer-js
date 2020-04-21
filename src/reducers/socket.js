const initialState = {
  msg: '-',
  i: 0
};

export const socket = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case 'TEST_SAGA_ASYNC':
      newState.i++;
      newState.msg = `saga received: ${action.value} (${newState.i})`;
      break;

    default:
      break;
  }
  return newState;
};
