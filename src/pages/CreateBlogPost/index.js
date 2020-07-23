import React, { useState } from "react";
import { selectToken } from "../../store/user/selectors";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { createPost } from "../../store/posts/actions";

export default function CreateBlogPost() {
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector(selectToken);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  //   console.log("TOKEN?", token);
  // what we expect to see?
  // - nothing
  // - undefined
  // - null
  if (token === null) {
    return (
      <div>
        Please <Link to="/signup">signup</Link> or{" "}
        <Link to="/login">login</Link> to share your thoughts, you genius
      </div>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(title, content);
    dispatch(createPost(title, content));
    // redirect to the homepage using useHistory & history.push
    history.push("/");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Some clickbait title here ...</label>
        <input
          name="title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label>Smart thoughts go here</label>
        <textarea
          name="content"
          type="text"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
