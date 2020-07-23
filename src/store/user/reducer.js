const initialState = {
  // TODO: take out token from initial state at somet poiont
  jwt:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzEwLCJpYXQiOjE1OTU1MDU5MTUsImV4cCI6MTU5NTUxMzExNX0.lw6kLzlnFEai0EKlYZYMHVh5VDdfJ9c2MFrIj4n77TA",
  //   jwt: null,
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
