export const initialState = {
  count: 0,
};

export const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "INCREMENT":
      return { ...state, count: state.count + payload };
    case "DECREMENT":
      return { ...state, count: state.count - payload };
    default:
      return state;
  }
};
