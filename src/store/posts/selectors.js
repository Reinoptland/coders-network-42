export function selectPosts(state) {
  // console.log("STATE IN SELECTOR:", state.posts);
  return state.feed.posts;
}

export function isLoading(state) {
  console.log("SELECTOR", state.feed.loading);
  return state.feed.loading;
}
