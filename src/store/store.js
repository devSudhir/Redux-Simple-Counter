import { reducerFunction } from "./reducer";
import { createStore } from "redux";

export const store = createStore(reducerFunction);
