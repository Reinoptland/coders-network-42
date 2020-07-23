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

  return <div>BE CREATIVE HERE ...</div>;
}
