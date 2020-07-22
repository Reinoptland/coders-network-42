import React, { useEffect, useState } from "react";
import { selectPosts } from "../../store/posts/selectors";
import { useSelector } from "react-redux";
import "./HomePage.css";
import axios from "axios";

export default function HomePage() {
  const posts = useSelector(selectPosts);
  //   console.log("What are posts in component?", posts);
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
    </div>
  );
}
