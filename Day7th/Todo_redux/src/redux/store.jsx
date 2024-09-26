// import { createStore } from "redux";
// {createStore} is depricated, now use legacy_createStore
import { createStore } from "redux";
import { todoReducer } from "./reduce";

export const store = createStore(todoReducer);
