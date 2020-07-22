const initialState = {
  loading: true,
  posts: [
    {
      id: 6,
      title: "JavaScript",
      content:
        "JavaScript (/ˈdʒɑːvəˌskrɪpt/),[6] often abbreviate…guages are distinct and differ greatly in design.",
      createdAt: "2020-02-27T14:44:44.098Z",
      updatedAt: "2020-03-10T14:44:44.397Z",
      author_id: 1,
      post_likes: [{ createdAt: null, updatedAt: null, developer: null }],
      tags: [{ id: 5, tag: "tech" }],
    },
  ],
};

export default function postsReducer(state = initialState, action = {}) {
  // console.log("ACTION IN REDUCER:", action, "STATE:", state);
  // Handle action in reducer
  // -> switch case
  // -> copy parts of the state you want to keep (some spread ...)
  // -> return a new state
  return state;
}
