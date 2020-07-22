// Action types
const FETCHED_5_POSTS = "FETCHED_5_POSTS";

// Action creators
export function fetched5Posts(posts) {
  return {
    type: FETCHED_5_POSTS,
    payload: posts,
  };
}
