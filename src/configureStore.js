import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const defaultState = {};
const rootReducer = (state = defaultState) => state;

export const store = createStore(rootReducer, applyMiddleware(thunk));
