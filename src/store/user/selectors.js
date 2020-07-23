// what is a selector
// function -> returns a specific part of the state
// so we can use it in our component

export function selectToken(state) {
  //   console.log("STATE IN  SELECTOR:", state.user.jwt);
  return state.user.jwt;
}
