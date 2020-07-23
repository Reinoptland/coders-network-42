import axios from "axios";

// THUNK TO SEND A REQUEST TO SIGNUP TO THE BACKEND
export function signUp(email, password) {
  return function (dispatch, getState) {
    console.log("INSIDE THUNK", email, password);
  };
}
