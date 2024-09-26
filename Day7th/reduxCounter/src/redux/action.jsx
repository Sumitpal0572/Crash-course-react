const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

export const increment = (payload) => {
  return {
    type: "INCREMENT",
    payload,
  };
};

export const decrement = (payload) => {
  return {
    type: "INCREMENT",
    payload,
  };
};
