import { ADD_COUNT, SUB_COUNT } from "./actionTypes.js";

const initState = {
  counter: 0
};

export const reducerFunction = (state = initState, action) => {
  switch (action.type) {
    case ADD_COUNT:
      return {
        ...state,
        counter: state.counter + action.payload
      };
    case SUB_COUNT:
      return {
        ...state,
        counter: state.counter - action.payload
      };
    default:
      return state;
  }
};
