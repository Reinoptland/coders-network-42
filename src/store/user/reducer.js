const initialState = {
  jwt: null,
};

export default function userReducer(state = initialState, action = {}) {
  switch (action.type) {
    case "SIGNUP_SUCCESS":
      return { ...state, jwt: action.payload };

    case "LOGIN_SUCCESS":
      return { ...state, jwt: action.payload };

    default:
      return state;
  }
}
