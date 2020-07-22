import React, { useEffect, useState } from "react";
import { selectPosts, isLoading } from "../../store/posts/selectors";
import { fetch5Posts } from "../../store/posts/actions";
import { useSelector, useDispatch } from "react-redux";
import "./HomePage.css";

export default function HomePage() {
  const posts = useSelector(selectPosts);
  const loading = useSelector(isLoading);
  console.log("LOADING?", loading);
  const dispatch = useDispatch();
  //   console.log("What are posts in component?", posts);

  useEffect(() => {
    dispatch(fetch5Posts);
  }, [dispatch]);

  function fetchMore() {
    dispatch(fetch5Posts);
  }

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <h1>Hello I am homepage</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
          </div>
        );
      })}
      <button onClick={fetchMore}>Fetch 5 more posts</button>
    </div>
  );
}
