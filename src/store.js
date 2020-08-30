import { createBrowserHistory } from "history";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./redux/reducers";

const reduxDevToolEnchancer = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;

export const history = createBrowserHistory();

const middlewares = [thunk];
const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = [middlewareEnhancer, reduxDevToolEnchancer];
const composedEnhancers = compose(...enhancers);

export default createStore(rootReducer, {}, composedEnhancers);
