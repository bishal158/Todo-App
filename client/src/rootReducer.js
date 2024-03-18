import { combineReducers } from "redux";
import { todoReducer } from "./reducers/todoReducer.js";

export const rootReducer = combineReducers({ todoReducer });
