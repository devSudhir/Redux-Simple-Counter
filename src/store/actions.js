import { ADD_COUNT, SUB_COUNT } from "./actionTypes.js";

export const addCount = (counter) => {
  return {
    type: ADD_COUNT,
    payload: counter
  };
};
export const subCount = (counter) => {
  return {
    type: SUB_COUNT,
    payload: counter
  };
};
