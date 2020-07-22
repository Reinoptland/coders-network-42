// THIS IS THE ROOT REDUCER (all the combined reducers)

// src/store/reducer.js
import { combineReducers } from "redux";
import postsReducer from "./posts/reducer";

const reducer = combineReducers({
  feed: postsReducer,
});

export default reducer;
