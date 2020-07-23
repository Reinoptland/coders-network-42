import axios from "axios";

const API_URL = "https://codaisseur-coders-network.herokuapp.com";

// THUNK TO SEND A REQUEST TO SIGNUP TO THE BACKEND
export function signUp(name, email, password) {
  return async function (dispatch, getState) {
    console.log("INSIDE THUNK", email, password);

    try {
      const response = await axios.post(`${API_URL}/signup`, {
        name: name,
        email: email,
        password: password,
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
}
