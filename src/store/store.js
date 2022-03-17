import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import game from "./slices/gameSlice";

const reducers = combineReducers({ game });

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export const makeStore = () =>
  createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
