const initialState = {
  loading: false,
  posts: [],
};

export default function postsReducer(state = initialState, action = {}) {
  // console.log("ACTION IN REDUCER:", action, "STATE:", state);
  // Handle action in reducer
  // -> X switch case
  // -> copy parts of the state you want to keep (some spread ...)
  // -> return a new state
  switch (action.type) {
    case "LOADING_POSTS":
      return { ...state, loading: true };

    case "FETCHED_5_POSTS":
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
        loading: false,
      };

    case "POST_CREATED":
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };

    default:
      return state;
  }
}
