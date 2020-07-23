import axios from "axios";

const API_URL = "https://codaisseur-coders-network.herokuapp.com";

// ACTION TYPES

const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";

// ACTION CREATORS

function signupSuccess(token) {
  return {
    type: SIGNUP_SUCCESS,
    payload: token,
  };
}

// THUNK ACTION CREATORS

// THUNK TO SEND A REQUEST TO SIGNUP TO THE BACKEND
export function signUp(name, email, password) {
  return async function (dispatch, getState) {
    // console.log("INSIDE THUNK", email, password);

    try {
      const response = await axios.post(`${API_URL}/signup`, {
        name: name,
        email: email,
        password: password,
      });

      console.log("RES:", response.data.jwt);

      const token = response.data.jwt;
      const action = signupSuccess(token);
      //   console.log(action);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
}

export function login(email, password) {
  return async function (dispatch, getState) {
    console.log("LOGIN THUNK:", email, password);
    const response = await axios.post(`${API_URL}/login`, {
      email: email,
      password: password,
    });

    console.log("LOGIN RESPONSE:", response);
  };
}
