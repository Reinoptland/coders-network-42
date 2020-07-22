// src/store/index.js

// imports functions from redux -> createStore, applyMiddleWare, compose
import { createStore, applyMiddleware, compose } from "redux";

// import the reduxthunk library (what does it do)
import ReduxThunk from "redux-thunk";

// import our rootreducer
import reducer from "./reducer";

// setup the redux devtools
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__() // start redux devtools
  : (x) => x; // call an empty functions

// we have extension to the store, thunk & devtools
// install thunk middle ware
const enhancer = compose(applyMiddleware(ReduxThunk), devTools);

// create store using root reducer and our extensions
const store = createStore(reducer, enhancer);
export default store;
