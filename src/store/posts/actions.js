import axios from "axios";

// Action types
const FETCHED_5_POSTS = "FETCHED_5_POSTS";
const LOADING_POSTS = "LOADING_POSTS";

// Action creators (synchronous, type & payload kind)
export function fetched5Posts(posts) {
  return {
    type: FETCHED_5_POSTS,
    payload: posts,
  };
}

export function loadingPosts() {
  return {
    type: LOADING_POSTS,
  };
}

// Thunk actions

// this a thunk, it has dispatch and getState as parameters
export async function fetch5Posts(dispatch, getState) {
  //   console.log("STATE IN THUNK ACTION", getState());
  //   dispatch({ type: "HELLO_STUDENTS_FROM_THUNK" });
  //   dispatch({ type: "HELLO_STUDENTS_FROM_THUNK_AGAIN" });
  //   dispatch({ type: "HELLO_STUDENTS_FROM_THUNK_ONE_MORE_TIME" });

  // Create a loading action, before we start fetching
  const loadingAction = loadingPosts();
  console.log(loadingAction);
  // dispatch it
  dispatch(loadingAction);

  // find out how many posts we have using getState
  const state = getState();
  const postCount = state.feed.posts.length;
  // set postCount as an offset (which posts do we want next?)
  const response = await axios.get(
    `https://codaisseur-coders-network.herokuapp.com/posts?offset=${postCount}&limit=5`
  );
  console.log("RES:", response.data.rows);
  const action = fetched5Posts(response.data.rows);
  console.log("ACTION?", action);
  dispatch(action);
}

// for a detail page (read more)
export function fetchPostById(postId) {
  return async function (dispatch, getState) {
    const response = await axios.get(
      `https://codaisseur-coders-network.herokuapp.com/posts/${postId}`
    );

    console.log(response);
    dispatch({ type: "FETCHED_SPECIFIC " });
  };
}

// const fetchPostById = (postId) => (dispatch, getState) => {

// }
