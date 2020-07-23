import React from "react";
import { selectToken } from "../../store/user/selectors";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CreateBlogPost() {
  const token = useSelector(selectToken);

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

  return (
    <div>
      <form>
        <label>Some clickbait title here ...</label>
        <input name="title" type="text" />
        <label>Smart thoughts go here</label>
        <textarea name="content" type="text" />
        <input type="submit" />
      </form>
    </div>
  );
}
