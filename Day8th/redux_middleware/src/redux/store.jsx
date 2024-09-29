import { applyMiddleware, combineReducers, createStore } from "redux";
import rootReducer from "./reducers";
import { combineMiddleware } from "../middlewares/loggerMiddlewares";

const store = createStore(rootReducer, applyMiddleware(...combineMiddleware));

export default store;
