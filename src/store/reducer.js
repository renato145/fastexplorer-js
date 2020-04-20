const initialState = {
  msg: '-'
};

export const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case 'TEST_SAGA':
      newState.msg = 'NEW'+action.value;
      break;

    default:
      break;
  }
  return newState;
};
