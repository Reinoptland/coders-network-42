// THIS IS THE ROOT REDUCER (all the combined reducers)

// src/store/reducer.js
import { combineReducers } from "redux";
import postsReducer from "./posts/reducer";
import userReducer from "./user/reducer";

const reducer = combineReducers({
  feed: postsReducer,
  user: userReducer,
});

export default reducer;
